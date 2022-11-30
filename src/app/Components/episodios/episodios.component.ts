import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RickserviceService } from 'src/app/Services/rickservice.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  @Input() personajes: any 
  @Input() usuari01: any
  @Input() capitulos: any
  usuari= Array<any>;
  vals = [0];
  val=true;
  rep=false;

  constructor(public PersonajesService: RickserviceService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
    this.obtenerCapitulos()
  } 

  obtenerPersonajes() {
    
    this.PersonajesService.obtenerPersonajes().then((data: any) =>{
      console.log(data);
      this.personajes=data;
    }).catch((err) =>{
      console.log(err);
    })
    console.log(this.personajes);
  }

  obtenerCapitulos() {
    this.PersonajesService.obtenerCapitulos().then((data: any) =>{
      
      console.log(data.results);
      this.capitulos=data.results;
    }).catch((err) =>{
      console.log(err);
    })
  }

  reparar(){
    for(let x = 0; x < this.capitulos.length; x++){
      for(let y = 0; y < this.capitulos[x].characters.length; y++){
        this.capitulos[x].characters[y] = this.capitulos[x].characters[y].substr(42,44);
        
      }
    }
    for(let x = 0; x < this.capitulos.length; x++){
      for(let y = 0; y < this.capitulos[x].characters.length; y++){
        for(let z = 0; z < this.personajes.length; z++){
          if(this.capitulos[x].characters[y] == this.personajes[z].id){
            this.capitulos[x].characters[y] = this.personajes[z].name
          }
        }
      }
    }
    console.log(this.capitulos)
    this.rep = true;
  }
  mostrar(usuario: any){
    if(this.rep == false){
      this.reparar();
    }
    
    this.val = false
    console.log(usuario)
    this.usuari01=usuario
  }




}
