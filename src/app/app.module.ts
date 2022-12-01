import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './Components/confirm/confirm.component';
import { HomeComponent } from './Components/home/home.component';
import { OtrosComponent } from './Components/otros/otros.component';
import { RolComponent } from './Components/rol/rol.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { JoyeriaComponent } from './Components/joyeria/joyeria.component';
import { ElectronicosComponent } from './Components/electronicos/electronicos.component';
import { HombresComponent } from './Components/hombres/hombres.component';
import { MujeresComponent } from './Components/mujeres/mujeres.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiginComponent,
    ConfirmComponent,
    HomeComponent,
    OtrosComponent,
    RolComponent,
    CategoriasComponent,
    JoyeriaComponent,
    ElectronicosComponent,
    HombresComponent,
    MujeresComponent,
    InventarioComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
