import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RickserviceService } from 'src/app/Services/rickservice.service';
import { TiendaService } from 'src/app/Services/tienda.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  @Input() product: any 
  @Input() productos: any 
  @Input() capitulos: any
  usuari= Array<any>;
  vals = [0];
  newvista= false
  

  constructor(public PersonajesService: RickserviceService, public TiendaService: TiendaService) { }

  ngOnInit(): void {
    // this.obtenerPersonajes();
    // this.obtenerCapitulos()
    this.obtenerProductos();
  } 

  // obtenerPersonajes() {
    
  //   this.PersonajesService.obtenerPersonajes().then((data: any) =>{
  //     console.log(data);
  //     this.personajes=data;
  //   }).catch((err) =>{
  //     console.log(err);
  //   })
  //   console.log(this.personajes);
  // }

  obtenerProductos() {
    this.TiendaService.obtenerProductos().then((data: any) =>{
      console.log(data);
      this.productos=data;
    }).catch((err) =>{
      console.log(err);
    })
  }

  verVista(id: any){
    this.TiendaService.obtenerProducto(id).then((data: any) =>{
      console.log(data);
      this.product=data;
    }).catch((err) =>{
      console.log(err);
    })
    this.newvista = true

  }
  cerrarVista(){
    this.newvista = false
  }

  aumentar(id: any){
    for(let x = 0; x < this.productos.length; x++){
      if(this.productos[x].id == id){
        this.productos[x].price = this.productos[x].price + 5;
      }
    }
  }
  disminuir(id: any){
    for(let x = 0; x < this.productos.length; x++){
      if(this.productos[x].id == id){
        if(this.productos[x].price > 10){
          this.productos[x].price = this.productos[x].price - 5;
        }
      }
    }
  }

  // obtenerCapitulos() {
  //   this.PersonajesService.obtenerCapitulos().then((data: any) =>{
      
  //     console.log(data.results);
  //     this.capitulos=data.results;
  //   }).catch((err) =>{
  //     console.log(err);
  //   })
  // }



}
