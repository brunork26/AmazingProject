import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

export class User {
  name: string;
  cremers: string;
  cpf: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public userId: string;
  constructor(private db: AngularFireDatabase,
              private fireBase: AngularFireDatabase,
              private afAuth: AngularFireAuth) {
                this.afAuth.authState.subscribe(user=>{
                  if(user) this.userId = user.uid;
                })
  }

  createUser(user: User) {
    const usersRef = this.db.list('users')
    usersRef.push(user);
  }
}
