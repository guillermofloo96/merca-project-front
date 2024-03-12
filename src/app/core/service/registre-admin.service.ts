import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenServiceService} from "./token.service.service";
import {RegistreadminDteo} from "../dto/registreLogin/registreadminDteo";
import {Observable} from "rxjs";
import {RegistreDteo} from "../dto/registreDteo";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class RegistreAdminService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private tokenService: TokenServiceService) {

  }

  public registre(registreDteo: RegistreadminDteo) : Observable<RegistreDteo>{

    console.log(registreDteo);
    return this.http.post<RegistreDteo>(this.apiUrl + "/auth/register", registreDteo)
  }
}
