 import {inject, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {AuthInGuard} from "../core/guards/auth-in.guard";
 import {AuthOutGuard} from "../core/guards/auth-out.guard";
 import {GuardLoginService} from "../core/service/guard-login.service";


const routes: Routes = [
  {
    path:"autenticacion",
    canActivate:[()=> inject(GuardLoginService).canActiveWithInAuth()],
  loadChildren:()=> import("./auth/auth.module").then(a=>a.AuthModule)
  },

  {
    path: "inicio",
    canActivate:[()=> inject(GuardLoginService).canActiveWithOutAuth()],
    loadChildren: () => import("./home/home.module").then(a=>a.HomeModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
