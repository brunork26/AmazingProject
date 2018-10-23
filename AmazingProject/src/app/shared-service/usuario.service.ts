import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  contacts : AngularFireList<Contact[]> = null;
  public userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  public getItemsList(): AngularFireList<Contact[]> {
    if (!this.userId) return;
    this.contacts = this.db.list(`contacts/${this.userId}`);
    return this.contacts
  }


  public createItem(contacts: Contact)  {
    //this.contacts.push(contacts);
  }

}
