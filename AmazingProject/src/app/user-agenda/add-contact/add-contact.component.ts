import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../shared-service/usuario.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Input() contact: Contact;
  public contacts;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsuarioService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  public saveContact(){
    console.log(this.form.value)
    this.userService.createContact(this.form.value);
  }

}
