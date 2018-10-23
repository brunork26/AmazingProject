import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared-service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  ngOnInit() {
  }


  getErrorMessage() {
    return this.form.get('email').hasError('required') ? 'Digite seu E-mail' :
            this.form.get('email').hasError('email') ? 'Email inválido' :
            '';
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
      this.form = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      });
    }

  tryLogin(){
    this.authService.emailLogin(this.form.value['email'], this.form.value["password"]).then(
      data => {
      console.log(data);
      this.router.navigate(['/perfil']);
      }
    );
  }
  
  async signInWithGoogle() {
    await this.authService.googleLogin();
    return await this.afterSignIn();
  }
  
  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    return this.router.navigate(['/perfil']);
  }

}
