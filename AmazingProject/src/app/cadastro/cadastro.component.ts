import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared-service/auth.service';
import { UsuarioService } from '../shared-service/usuario.service';

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
              private formBuilder: FormBuilder,
              private userService: UsuarioService) {
              this.form = this.formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                password: ['', Validators.required],
                // cremers: ['', Validators.required],
                name: ['', Validators.required],
                // cpf: ['', Validators.required]
              });
   }

  ngOnInit() {
  }

  tryRegister() {
    const value = this.form.value;
    console.log(value);
    this.authService.emailSignUp(value.email, value.password, value.name)
    .then(res => {
      console.log(res);
      alert('Registrou');
      //this.userService.createUser({name: this.form.get('name').value, cpf: this.form.get('cpf').value, cremers: this.form.get('cremers').value, userId: res['user'].uid});
    }, err => {
      console.log(err);
      alert('Erro');
    });
  }

}
