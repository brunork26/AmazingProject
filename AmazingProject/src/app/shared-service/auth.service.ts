import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter } from 'rxjs/operators';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;

  public userId: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.userId = user.uid;
          localStorage.setItem('uid', this.userId);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

   }

  public googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        // this.notify.update('Welcome to Firestarter!!!', 'success');
        
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  public emailSignUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        console.log(credential)
        const user: User = {
          displayName: displayName,
          email: credential.user.email,
          photoURL: credential.user.photoURL,
          uid: credential.user.uid
        }
        return this.updateUserData(user);
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        console.log('login')
        console.log(credential.user)
        return this.afs.doc<User>(`users/${credential.user.uid}`).valueChanges().subscribe(user=> {
          return this.updateUserData(user);
        })
      })
      .catch(error => {
        return this.handleError(error);
      } 
      );
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error){
    console.error(error);
    if(error.message == "The email address is badly formatted.")   
      return("Formato de Email Inválido");  
    if(error.message == "The email address is already in use by another account.")
      return("Este email já esta sendo utilizado por outra conta!");
    if(error.message == "Password should be at least 6 characters")
      return("A senha precisa ter no mínimo 6 caracteres!");
    if(error.message = "There is no user record corresponding to this identifier. The user may have been deleted.")
      return(" Usuário inexistente ou deletado");
    if(error.message = "The password is invalid or the user does not have a password.")
      return("Senha inválida");
  }

  // get userId
  public getUID(): string{
    return this.userId;
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {
    console.log(user)
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }



}
