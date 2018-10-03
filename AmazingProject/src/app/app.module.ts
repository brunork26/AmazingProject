import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroMedicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
