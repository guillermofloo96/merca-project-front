import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder){
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]

    });

  }

  public singIn(): void{
    if(this.loginForm.valid){
      alert("todo correcto")
    }else{
      alert("error")
    };
  }

  /**
   * singUp
   */
  public singUp(): void {
    this.router.navigateByUrl("autenticacion/registo-sesion")

    
  }

}
