
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenServiceService} from "../service/token.service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthOutGuard implements CanActivate {

  constructor(private tokenService: TokenServiceService, private router:Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Implementa tu lógica de guard aquí


    if (this.tokenService.getToke().at(4).localeCompare("admin")) {
      alert(
        this.tokenService.getToke().at(4)
      )
      this.router.navigateByUrl("/inicio")
      return true
    }
    return false
    // Redirige a otra página o realiza alguna acción

  }
}
