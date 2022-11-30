import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  url = 'https://fakestoreapi.com/products';

   constructor(private http: HttpClient) {}

  obtenerCategorias() {
    return this.http.get(`${this.url}/categories`).toPromise();
    }

  obtenerProductos() {
    return this.http.get(`${this.url}`).toPromise();
    }

  obtenerProducto(id:any) {
    return this.http.get(`${this.url}/${id}`).toPromise();
    }
}
