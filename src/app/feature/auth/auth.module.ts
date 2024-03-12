import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ProductoComponent } from './pages/producto/producto/producto.component';

import {ReactiveFormsModule} from "@angular/forms";
import { RegistreFormComponent } from '../home/pages/loginForm/registre-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProductoComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
