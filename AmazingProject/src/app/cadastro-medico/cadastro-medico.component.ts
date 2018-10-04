import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css']
})
export class CadastroMedicoComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide ='true';
  getErrorMessage() {
    return this.email.hasError('required') ? 'Digite seu E-mail' :
        this.email.hasError('email') ? 'Email inválido' :
            '';
  }

  

  constructor() { }

  ngOnInit() {
  }

 

}
