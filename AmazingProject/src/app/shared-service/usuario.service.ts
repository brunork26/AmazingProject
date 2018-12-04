import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public contactsCollection: AngularFirestoreCollection<any>;
  public contactDocument:   AngularFirestoreDocument<any>;
  public userId: string;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(user => {
    //   if(user) this.userId = user.uid
    // })
    this.userId = localStorage.getItem('uid');
    this.contactsCollection = this.afs.collection(`contacts`, (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.contactsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  public getContact() {
    console.log(this.userId)
    // const contactList = this.afs.collection('contacts');
    // const contactRef: AngularFirestoreDocument<Contact> = this.afs.doc(
    //   `contacts/${this.userId}/contacts/`
    // );
    const contacts = this.afs.collection(`users/${this.userId}/contacts`);
    console.log(contacts)
    return contacts.valueChanges();
  }

  public createContact(content) {
    // const contact = content;
    // return this.contactsCollection.add(contact).doc(this.userId);
    // const contactRef: AngularFirestoreDocument<Contact> = this.afs.doc(
    //   `contacts/${this.userId}`
    // );
    const contacts = this.afs.collection(`users/${this.userId}/contacts`);
    const data = content
    return contacts.add(data);
  }

  public excluir(index){
    const contacts = this.afs.collection(`users/${this.userId}/contacts`);
    contacts.stateChanges().subscribe(data=>{
      const id = data[index].payload.doc.id;
      contacts.doc(id).delete();
    })
    
  }
  // updateContact(id: string, data: any) {
  //   return this.getContact(id).update(data);
  // }

  // deleteContact(id: string) {
  //   return this.getContact(id).delete();
  // }

}
