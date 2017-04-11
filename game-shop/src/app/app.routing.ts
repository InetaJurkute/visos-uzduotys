import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ManageGamesComponent } from './components/manage-games/manage-games.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component'
import {GameFormComponent} from "./components/game-form/game-form.component";
import {MyGamesComponent} from "./components/my-games/my-games.component";

import {AdminRouteGuard, CustomerRouteGuard} from "./services/route.guard";

import {RegistrationComponent} from "./components/registration/registration.component";

const appRoutes: Routes = [
    {
        path: '*',
        redirectTo: '/game-list',
        canActivate: [CustomerRouteGuard]
    },
    {
        path: 'game-list',
        component: GameListComponent,
        canActivate: [CustomerRouteGuard]
    },
    {
        path: 'manage-games',
        component: ManageGamesComponent,
        canActivate: [AdminRouteGuard]
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
      component: GameFormComponent,
      canActivate: [AdminRouteGuard]
    },
    {
      path: 'registration',
      component: RegistrationComponent
    },
    {
      path: 'my-games',
      component: MyGamesComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
