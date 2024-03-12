import { Injectable } from '@angular/core';
import {TokenServiceService} from "./token.service.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GuardLoginService {

  constructor(private tokenService: TokenServiceService, private router:Router) { }

  public canActiveWithInAuth():boolean{

    if (this.tokenService.getToke()) {

      this.router.navigateByUrl("/inicio")
      return false
    }
    else {
      return true;
    }

  }

  public canActiveWithOutAuth():boolean{


    if (!this.tokenService.getToke()) {


      this.router.navigateByUrl("/autenticacion/inicio-sesion")
      return false
    }
    else {
      return true;
    }
    // Redirige a otra página o realiza alguna acción

  }


}
