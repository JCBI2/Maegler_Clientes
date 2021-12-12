import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  driver_id = ""
  Usuario = ""
  email = ""
  passwordShowed = false
  newPasswordShowed = false
  repeatNewPasswordShowed = false
  passwordFormIsActived = false

  constructor(private route: ActivatedRoute, private location: Location, private usuarioService: UsuariosService) { }

  goBack(){
    this.location.back();
  }

  togglePassword(){
    let passwordInput: any = document.getElementById("contraseña")
    if(this.passwordShowed){
      passwordInput.type = "password"
      this.passwordShowed = !this.passwordShowed
    }else{
      passwordInput.type = "text"
      this.passwordShowed = !this.passwordShowed
    }
  }

  toggleNewPassword(){
    let passwordInput: any = document.getElementById("nueva_contraseña")
    if(this.newPasswordShowed){
      passwordInput.type = "password"
      this.newPasswordShowed = !this.newPasswordShowed
    }else{
      passwordInput.type = "text"
      this.newPasswordShowed = !this.newPasswordShowed
    }
  }

  toggleRepeatNewPassword(){
    let passwordInput: any = document.getElementById("repeticion_nueva_contraseña")
    if(this.repeatNewPasswordShowed){
      passwordInput.type = "password"
      this.repeatNewPasswordShowed = !this.repeatNewPasswordShowed
    }else{
      passwordInput.type = "text"
      this.repeatNewPasswordShowed = !this.repeatNewPasswordShowed
    }
  }

  showChangePasswordForm(){
    let editButton: any = document.getElementById("change-password")
    editButton.disabled = true
    this.passwordFormIsActived = true;
  }

  closePasswordForm(){
    let editButton: any = document.getElementById("change-password")
    editButton.disabled = false
    this.passwordFormIsActived = false;

  }

  obtenerInfo(){
    this.usuarioService.datos().subscribe((res:any)=>{
      console.log(res);
      this.Usuario = res.nombre_completo
      this.email = res.email
    })
  }

  ngOnInit(): void {
    this.driver_id = this.route.snapshot.paramMap.get("id") || ""
    console.log(this.driver_id)
    this.obtenerInfo();
  }

}
