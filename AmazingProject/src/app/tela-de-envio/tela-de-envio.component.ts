import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SmsService } from '../shared-service/sms.service';

@Component({
  selector: 'app-tela-de-envio',
  templateUrl: './tela-de-envio.component.html',
  styleUrls: ['./tela-de-envio.component.css'],
  providers: [SmsService]
})

export class TelaDeEnvioComponent implements OnInit {

  @Input() msg;
  @Input() number;
  // msg : string;
  postData : string;                            
  public formSms: FormGroup;
  
  constructor(private smsService : SmsService, private formBuilder: FormBuilder) { 
    this.msg = "";

    // this.formSms = this.formBuilder.group({
    //   msg: new FormControl(''),
    //   password: new FormControl('')
    // });
  }
  
  enviaSMS(numPaciente : number, msgPaciente : string){
    this.smsService.postSMS(numPaciente,msgPaciente)
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("acesso a webapi post ok...")
    );
}

  ngOnInit() {
  }

}
