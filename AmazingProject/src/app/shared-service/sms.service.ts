import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Headers } from '@angular/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private  token: string;

  constructor(private http : Http) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = "fd0dc4a161c3e8273981424620aefd09";

   }

  postSMS(numero : number, mensagem : string){
    let json = JSON.stringify({
      numero_destino: numero, 
      mensagem: mensagem,
      resposta_usuario : false,
      multi_sms: false,
      data_criacao : ''
    });
    

    let params =  json;
    alert(params);
    let cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    cabe.append('Access-Token', this.token);
    
    return this.http.post('https://api.totalvoice.com.br/sms', 
    params, {
             headers : cabe
            })
            .pipe(map(res=> res.json()));
  }
}
