import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ListUtilisateursComponent } from 'app/pages/utilisateurs/list-utilisateurs/list-utilisateurs.component';
import { ListProduitsComponent } from 'app/pages/produits/list-produits/list-produits.component';
import { ListEchantillonsComponent } from 'app/pages/echantillons/list-echantillons/list-echantillons.component';
import { ListProjetsComponent } from 'app/pages/projets/list-projets/list-projets.component';
import { ListEmplacementsComponent } from 'app/pages/emplacements/list-emplacements/list-emplacements.component';
import { ListMagasinsComponent } from 'app/pages/magasins/list-magasins/list-magasins.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
     { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    { path: 'utilisateurs',    component: ListUtilisateursComponent },
    { path: 'produits',         component: ListProduitsComponent },
    { path: 'echantillons',    component: ListEchantillonsComponent },
    { path: 'projets',    component: ListProjetsComponent },
    { path: 'emplacements',    component: ListEmplacementsComponent },
    { path: 'magasins',    component: ListMagasinsComponent },

    // { path: 'produits',       component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
