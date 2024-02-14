import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductoComponent } from './pages/producto/producto/producto.component';
import { LoginformComponent } from './pages/loginForm/loginform/loginform.component';

const routes: Routes = [
{
  path:"registo-sesion",
  component:LoginformComponent
},
{
  path:"inicio-sesion",
   component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
