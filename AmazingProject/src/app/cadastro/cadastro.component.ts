import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared-service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public form: FormGroup;
  public hide ='true';
  
  getErrorMessage() {
    return this.form.get('email').hasError('required') ? 'Digite seu E-mail' :
           this.form.get('email').hasError('email') ? 'Email inválido' :
            '';
  }

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {
              this.form = this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required]]
              });
   }

  ngOnInit() {
  }

  tryRegister() {
    const value = this.form.value;
    console.log(value);
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      alert('Registrou');
    }, err => {
      console.log(err);
      alert('Erro');
    });
  }

}
