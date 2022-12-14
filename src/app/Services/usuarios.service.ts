import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'https://back-login12.herokuapp.com';
  // url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    return this.http.get(`${this.url}/usuario`).toPromise();
    }

  registrarUsuario(usuario: any) {
    return this.http.post(`${this.url}/usuario`, usuario).toPromise();
    }
  recuperar(usuario: any) {
    return this.http.post(`${this.url}/usuarior`, usuario).toPromise();
    }
  registrarEmail(email: any) {
    return this.http.post(`${this.url}/email`, email).toPromise();
    }
  modificarUsuario(usuario: any) {
    console.log(usuario)
    return this.http.put(`${this.url}/usuario/${usuario._id}`, usuario).toPromise();
    }
}
