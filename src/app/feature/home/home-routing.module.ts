import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MercadosComponent} from "./pages/mercados/mercados.component";
import {RegistreFormComponent} from "./pages/loginForm/registre-form.component";

const routes: Routes = [
  {
    path:"",
    component:MercadosComponent
  },
  {
    path:"registo-sesion",
    component:RegistreFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
