import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {AuthLoginRequestDto} from "../dto/authLoginRequestDto";
import {Observable, Subscription, tap} from "rxjs";
import {AuthLoginResponseDto} from "../dto/authLoginResponseDto";
import {TokenServiceService} from "./token.service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private tokenService: TokenServiceService) {

  }

  public singIn(authDto: AuthLoginRequestDto): Observable<AuthLoginResponseDto> {

    return this.http.post<AuthLoginResponseDto>(this.apiUrl + "/auth/sign-in", authDto).pipe(
      tap(response=>{
        this.tokenService.saveToken(response.jwt)
      })
    );
  }
}
