import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide ='true';
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'Digite seu E-mail' :
        this.email.hasError('email') ? 'Email inválido' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}
