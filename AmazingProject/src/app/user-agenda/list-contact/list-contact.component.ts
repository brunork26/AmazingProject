import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared-service/usuario.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  public contacts;

  constructor(private userService: UsuarioService) {
    this.userService.getContact().subscribe(
      data => {
        console.log('lista')
        console.log(data)
        this.contacts = data;
      }
    )
  }

  ngOnInit() {
  }

  excluirPaciente(ctt){
    this.userService.excluir(ctt); 
  }

}
