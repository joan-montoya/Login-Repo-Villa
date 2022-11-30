import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TiendaService } from 'src/app/Services/tienda.service';

@Component({
  selector: 'app-electronicos',
  templateUrl: './electronicos.component.html',
  styleUrls: ['./electronicos.component.css']
})
export class ElectronicosComponent implements OnInit {

  @Input() product: any 
  @Input() productos: any 
  newvista= false
  valor = "electronics";
  pro: Array<any> = [];

  constructor(public TiendaService: TiendaService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  } 

  obtenerProductos() {
    this.TiendaService.obtenerProductos().then((data: any) =>{
      console.log(data);
      this.productos=data;
      for(let x = 0; x < this.productos.length; x++){
        if(this.productos[x].category == this.valor){
          this.pro.push(this.productos[x])
        }
      }
      console.log(this.pro)
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

}
