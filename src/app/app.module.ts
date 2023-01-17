import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from "./services/users.service";
import { ListProduitsComponent } from './pages/produits/list-produits/list-produits.component';
import { CreateProduitsComponent } from './pages/produits/create-produits/create-produits.component';
import { EditProduitsComponent } from './pages/produits/edit-produits/edit-produits.component';
import { DeleteProduitsComponent } from './pages/produits/delete-produits/delete-produits.component';
import { DeleteEchantillonsComponent } from './pages/echantillons/delete-echantillons/delete-echantillons.component';
import { EidtEchantillonsComponent } from './pages/echantillons/eidt-echantillons/eidt-echantillons.component';
import { CreateEchantillonsComponent } from './pages/echantillons/create-echantillons/create-echantillons.component';
import { ListEchantillonsComponent } from './pages/echantillons/list-echantillons/list-echantillons.component';
import { CreateProjetsComponent } from './pages/projets/create-projets/create-projets.component';
import { ListProjetsComponent } from './pages/projets/list-projets/list-projets.component';
import { DeleteProjetsComponent } from './pages/projets/delete-projets/delete-projets.component';
import { EditProjetsComponent } from './pages/projets/edit-projets/edit-projets.component';
import { ListMagasinsComponent } from './pages/magasins/list-magasins/list-magasins.component';
import { DeleteMagasinsComponent } from './pages/magasins/delete-magasins/delete-magasins.component';
import { EditMagasinsComponent } from './pages/magasins/edit-magasins/edit-magasins.component';
import { EditEmplacementsComponent } from './pages/emplacements/edit-emplacements/edit-emplacements.component';
import { ListEmplacementsComponent } from './pages/emplacements/list-emplacements/list-emplacements.component';
import { CreateEmplacementsComponent } from './pages/emplacements/create-emplacements/create-emplacements.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ListProduitsComponent,
    CreateProduitsComponent,
    EditProduitsComponent,
    DeleteProduitsComponent,
    DeleteEchantillonsComponent,
    EidtEchantillonsComponent,
    CreateEchantillonsComponent,
    ListEchantillonsComponent,
    CreateProjetsComponent,
    ListProjetsComponent,
    DeleteProjetsComponent,
    EditProjetsComponent,
    ListMagasinsComponent,
    DeleteMagasinsComponent,
    EditMagasinsComponent,
    EditEmplacementsComponent,
    ListEmplacementsComponent,
    CreateEmplacementsComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    NgbModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
