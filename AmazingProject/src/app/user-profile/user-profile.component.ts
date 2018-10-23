import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared-service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user = {
    displayName: 'Bruno',
    uid: 111,
    photoURL: null
  }

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

}
