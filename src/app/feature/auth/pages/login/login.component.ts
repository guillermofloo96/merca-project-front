import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AppBaseComponet} from "../../../../core/utils/AppBaseComponet";
import {AuthLoginRequestDto} from "../../../../core/dto/authLoginRequestDto";
import {AuthService} from "../../../../core/service/auth.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AppBaseComponet{


  public loginForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder, private authService:AuthService ){
    super();
    this.loginForm=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]

    });

  }

  public async singIn():Promise<void> {
    let dtoLogin: AuthLoginRequestDto;
    if(this.loginForm.valid){
      let email=this.loginForm.get('email').value;
      let password=this.loginForm.get('password').value;
      dtoLogin={
        email,
        password
      }

      console.log(dtoLogin);
      await lastValueFrom(this.authService.singIn(dtoLogin));

     await this.router.navigateByUrl("/inicio")
    }
  }

  /**
   * singUp
   */
  public singUp(): void {
    this.router.navigateByUrl("autenticacion/inicio-sesion")


  }
  public getErrorForm(field:string): String{
    let message;
    if(this.isTouchedField(this.loginForm,field)){
      if(this.loginForm.get(field).hasError('required')){
        message='*Campo obligatorio';
      }else if (this.loginForm.get(field).hasError('email')){

        message='su correo no tiene formato de email';
      }
    }
    return message;

  }

}
