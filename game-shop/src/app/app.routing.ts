import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { AboutComponent } from './components/about/about.component';
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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
