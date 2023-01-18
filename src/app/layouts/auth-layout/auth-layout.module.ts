import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthLayoutModule { }
