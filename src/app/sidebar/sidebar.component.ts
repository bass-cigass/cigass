import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/utilisateurs',  title: 'Utilisateurs',     icon:'nc-diamond',    class: '' },
    { path: '/produits',          title: 'Produits',              icon:'nc-pin-3',      class: '' },
    { path: '/projets',          title: 'Projets',              icon:'nc-pin-3',      class: '' },
    { path: '/echantillons',          title: 'Echantillons',              icon:'nc-pin-3',      class: '' },
    { path: '/emplacements',          title: 'Emplacements',              icon:'nc-pin-3',      class: '' },
    { path: '/magasins',          title: 'Magasins',              icon:'nc-pin-3',      class: '' },

    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
