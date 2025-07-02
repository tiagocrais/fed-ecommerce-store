import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LojaComponent } from './components/loja/loja.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'esqueci-senha', component: RecuperarSenhaComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
