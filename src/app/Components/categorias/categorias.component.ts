import { Component, Input, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/Services/tienda.service';
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input() categorias: any 

  constructor(public TiendaService: TiendaService,private router: Router) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  } 

  obtenerPersonajes() {
    
    this.TiendaService.obtenerCategorias().then((data: any) =>{
      console.log(data);
      this.categorias=data;
    }).catch((err) =>{
      console.log(err);
    })
  }

  electronicos(){
    this.router.navigate(['/electronicos']);
  }
  joyeria(){
    this.router.navigate(['/joyeria']);
  }
  hombres(){
    this.router.navigate(['/hombre']);
  }
  mujeres(){
    this.router.navigate(['/mujeres']);
  }

}
