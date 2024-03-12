import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MercadosComponent } from './pages/mercados/mercados.component';
import {RegistreFormComponent} from "./pages/loginForm/registre-form.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MercadosComponent,
    RegistreFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }
