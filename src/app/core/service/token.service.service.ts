import { Injectable } from '@angular/core';
import { getCookie, setCookie } from 'typescript-cookie'

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }
public saveToken(token: string): void{
 //   localStorage.setItem("token",token);//*almacena el token en el local storage
  setCookie("token", token, {
     expires:1, path:"/"
  });//almacena el token en la kokies


}
public getToke(): string{

    return  getCookie("token")
}
  public deleteToken(): void{


  }
}
