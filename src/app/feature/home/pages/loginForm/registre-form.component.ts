import { Component } from '@angular/core';
import {AppBaseComponet} from "../../../../core/utils/AppBaseComponet";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/service/auth.service";
import {lastValueFrom} from "rxjs";
import {RegistreAdminService} from "../../../../core/service/registre-admin.service";
import {RegistreadminDteo} from "../../../../core/dto/registreLogin/registreadminDteo";

@Component({
  selector: 'app-registre-form',
  templateUrl: './registre-form.component.html',
  styleUrls: ['./registre-form.component.css']
})
export class RegistreFormComponent extends AppBaseComponet{


  public regisForm: FormGroup;

  public paswodGenerado: string;

  public registrado: boolean;


  constructor(private router: Router, private fb: FormBuilder, private regisreAdminService:RegistreAdminService ){
    super();
    this.registrado=false;
    this.regisForm=this.fb.group({
      nombres:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      rol:['',Validators.required],
      //numCel:['',[Validators.required,Validators.pattern("^[0-9]*$")]],

    });

  }

  public async registreAdmin(): Promise<void>{

let dtoAdmin: RegistreadminDteo=this.regisForm.value;
    if(this.regisForm.valid){



      await lastValueFrom(this.regisreAdminService.registre(dtoAdmin)).then(resp=>{
this.paswodGenerado=resp.contra;

      })
      this.registrado=true;
    }else{
      console.log(this.getErrorForm(this.regisForm.value));
    }


  }

  public getErrorForm(field:string): String{
    let message;
    if(this.isTouchedField(this.regisForm,field)){
      if(this.regisForm.get(field).hasError('required')){
        message='*Campo obligatorio';
      }else if (this.regisForm.get(field).hasError('pattern')){

        message='Su numero de telefono supera el maximo valido';
      }
    }
    return message;

  }


}
