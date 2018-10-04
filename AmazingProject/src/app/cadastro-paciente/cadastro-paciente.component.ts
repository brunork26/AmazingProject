import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared-service/auth.service';


@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  tryRegister() {
    const value = {
      email: 'bruno.r.kieling@hotmail.com',
      password: '00000000'
    }
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      alert('Registrou');
    }, err => {
      console.log(err);
      alert('Erro');
    })
  }

}
