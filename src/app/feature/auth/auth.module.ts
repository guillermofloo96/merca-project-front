import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ProductoComponent } from './pages/producto/producto/producto.component';
import { LoginformComponent } from './pages/loginForm/loginform/loginform.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProductoComponent,
    LoginformComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { } 
