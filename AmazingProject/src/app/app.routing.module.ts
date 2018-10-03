import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '',         
      redirectTo: 'home',
      pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro-medico', component: CadastroMedicoComponent },
    { path: 'cadastro-paciente', component: CadastroPacienteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent }, 
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
