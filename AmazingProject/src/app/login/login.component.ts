import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared-service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form2: FormGroup;
  
  ngOnInit() {
  }

  
  getErrorMessage() {
    return this.form2.get('email').hasError('required') ? 'Digite seu E-mail' :
           this.form2.get('email').hasError('email') ? 'Email inválido' :
            '';
  }

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {
              this.form2 = this.formBuilder.group({
                email: new FormControl('', [Validators.required, Validators.email]),
                password: new FormControl('', [Validators.required])
              });
   }
   tryLogin(){
     alert("Logando...");
   }
}
