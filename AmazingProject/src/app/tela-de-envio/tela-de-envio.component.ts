import { Component, OnInit } from '@angular/core';
import { SmsService } from '../shared-service/sms.service';

@Component({
  selector: 'app-tela-de-envio',
  templateUrl: './tela-de-envio.component.html',
  styleUrls: ['./tela-de-envio.component.css'],
  providers: [SmsService]
})
export class TelaDeEnvioComponent implements OnInit {
  
  postData : string;

  constructor(private smsService : SmsService) { }

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
