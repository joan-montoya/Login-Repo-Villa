import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SiginComponent } from './Components/sigin/sigin.component';
import { ConfirmComponent } from './Components/confirm/confirm.component';
import { HomeComponent } from './Components/home/home.component';
import { OtrosComponent } from './Components/otros/otros.component';
import { RolComponent } from './Components/rol/rol.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { JoyeriaComponent } from './Components/joyeria/joyeria.component';
import { HombresComponent } from './Components/hombres/hombres.component';
import { MujeresComponent } from './Components/mujeres/mujeres.component';
import { ElectronicosComponent } from './Components/electronicos/electronicos.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'sigin', component: SiginComponent },
  { path: 'registro', component: ConfirmComponent },
  { path: 'otros', component: OtrosComponent },
  { path: 'admin', component: RolComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'hombre', component: HombresComponent },
  { path: 'mujeres', component:  MujeresComponent},
  { path: 'electronicos', component: ElectronicosComponent },
  { path: 'joyeria', component: JoyeriaComponent},
  { path: 'inventario', component: InventarioComponent},
  { path: 'recuperar', component: RecuperarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
