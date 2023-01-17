import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import {    NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListUtilisateursComponent } from 'app/pages/utilisateurs/list-utilisateurs/list-utilisateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from 'app/services/users.service';
import { ProduitsService } from 'app/services/produits.service';
import { ProjetService } from 'app/services/projet.service';
import { MagasinService } from 'app/services/magasin.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxDatatableModule,
    HttpClientModule

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    ListUtilisateursComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    
  ],
  providers: [UsersService, ProduitsService, ProjetService, MagasinService]
})

export class AdminLayoutModule {}
