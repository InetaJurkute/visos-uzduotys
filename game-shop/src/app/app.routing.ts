import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ManageGamesComponent } from './components/manage-games/manage-games.component';

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
