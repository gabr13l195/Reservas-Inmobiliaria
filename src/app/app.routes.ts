import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavBarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'propiedades', component: PropiedadesComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'clientes', component: ClientesComponent},


    {path: '', redirectTo:'home', pathMatch:'full'},


];
