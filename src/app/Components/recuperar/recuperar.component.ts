import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service'
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  @Input() usuarios: any 
  @Input() usuario: any 
  @Input() auth: any 
  authotize = String;


  Usuario = {
    email: ""
  }
  
  constructor(public UsuariosService: UsuariosService, private router: Router) {
  }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.UsuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
    console.log(this.usuarios);
  }

  log(){
    
      for(let x = 0; x < this.usuarios.length; x++){
        if(this.Usuario.email == this.usuarios[x].email){
          this.usuario = this.usuarios[x];
          this.UsuariosService.recuperar(this.usuario).then((data: any) =>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Se envio el correo',
              showConfirmButton: false,
              timer: 1500
            })
          }).catch((err) =>{
            //console.log(err);
              })
          
          
          break;
        }else{
          console.log("no")
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No se encontro el correo',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      
    }

    registrarse(){
      this.router.navigate(['/sigin']);
    }

    }
    


