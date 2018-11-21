import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-agenda',
  templateUrl: './user-agenda.component.html',
  styleUrls: ['./user-agenda.component.css']
})
export class UserAgendaComponent implements OnInit {
  
  public contact: Contact = {
    name: '',
    phone: '',
    email: '',
    date: new Date()
  }

  constructor() {
    
  }

  ngOnInit() {
  }

}
