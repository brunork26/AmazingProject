// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Constants
import { environment } from '../environments/environment';
// Components
import { AppComponent } from './app.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
// Third party modules and project modules
import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './shared-components/material.modules';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpModule } from '@angular/http';
import { TelaDeEnvioComponent } from './tela-de-envio/tela-de-envio.component';
import { AuthService } from './shared-service/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAgendaComponent } from './user-agenda/user-agenda.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AddContactComponent } from './user-agenda/add-contact/add-contact.component';
import { ListContactComponent } from './user-agenda/list-contact/list-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroMedicoComponent,
    CadastroPacienteComponent,
    TelaDeEnvioComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    UserAgendaComponent,
    AddContactComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'firestarter'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    { provide: StorageBucket, useValue: 'gs://amazing-project-a3006.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
