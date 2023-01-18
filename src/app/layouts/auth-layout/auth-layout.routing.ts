import { Routes } from '@angular/router';
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    // { path: 'register',       component: RegisterComponent }
];

export class AuthLayoutRouting { }
