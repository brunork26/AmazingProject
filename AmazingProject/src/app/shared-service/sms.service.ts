import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Headers } from '@angular/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SmsService {


  public token: string;

  constructor(private http : Http) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = "fd0dc4a161c3e8273981424620aefd09";

   }

  postSMS(){
    let json = JSON.stringify({
      numero_destino: '51999973747', 
      mensagem: 'Mensagem teste',
      resposta_usuario : false,
      multi_sms: false,
      data_criacao : ''
    });
    

    let params =  json;
    alert(params);
    let cabe = new Headers();
    cabe.append('Content-Type', 'application/json');
    cabe.append('Access-Token', "fd0dc4a161c3e8273981424620aefd09");
    
    return this.http.post('https://api.totalvoice.com.br/sms', 
    params, {
             headers : cabe
            })
            .pipe(map(res=> res.json()));
  }
}
