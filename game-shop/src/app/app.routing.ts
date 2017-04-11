import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ManageGamesComponent } from './components/manage-games/manage-games.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component'
import {GameFormComponent} from "./components/game-form/game-form.component";
import {RegistrationComponent} from "./components/registration/registration.component";

const appRoutes: Routes = [
    {
        path: '*',
        redirectTo: '/game-list'
    },
    {
        path: 'game-list',
        component: GameListComponent
    },
    {
        path: 'manage-games',
        component: ManageGamesComponent
    },
    {
        path: 'game/:id',
        component: AboutComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'shoppingCart',
        component: ShoppingCartComponent
    },
    {
      path: 'addGame',
      component: GameFormComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
