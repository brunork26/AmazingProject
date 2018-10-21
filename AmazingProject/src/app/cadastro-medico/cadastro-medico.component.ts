import { Component, OnInit } from '@angular/core';
import { SmsService } from "../shared-service/sms.service";
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.css'],
  providers:[SmsService]
})
export class CadastroMedicoComponent implements OnInit {

  postData : string;

  constructor(private smsService : SmsService) {}

  enviaSMS(){
      this.smsService.postSMS()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("acesso a webapi post ok...")
      );
  }
  
  ngOnInit() {
  }
}
  