import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  Usuario = {
    nombre: null,
    password: "",
    email: "",
    apellidos: "",
    rol: ""
  }
  @Input() nombre: any 
  @Input() apellidos: any 
  @Input() password: any 
  @Input() email: any 
  @Input() emailu: any 

  constructor(public UsuariosService: UsuariosService, private router: Router) {
    this.emailu = localStorage.getItem("em");
   }

  ngOnInit(): void {
  }

  registrarUsuario(){
    this.nombre = localStorage.getItem("nom");
    this.Usuario.nombre = this.nombre
    this.apellidos = localStorage.getItem("app");
    this.Usuario.apellidos = this.apellidos
    this.email = localStorage.getItem("em");
    this.Usuario.email = this.email
    this.password = localStorage.getItem("pass");
    this.Usuario.password = this.password
    this.Usuario.rol = "1";

    console.log(this.Usuario)
    this.UsuariosService.registrarUsuario(this.Usuario).then((data: any) =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/login']);
    }).catch((err) =>{
      //console.log(err);
        })
        
  }

}
