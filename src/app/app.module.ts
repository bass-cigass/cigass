import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SamplerUserLayoutComponent } from './layouts/sampler-user-layout/sampler-user-layout.component';
import { AppRoutingModule } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    SamplerUserLayoutComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    // RouterModule.forRoot(AppRoutes,{
    //   useHash: true
    // }),
    HttpClientModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
