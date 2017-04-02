import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { AboutComponent } from './components/about/about.component';

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
        path: 'add-game',
        component: AddGameComponent
    },
    {
        path: 'game/:id',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
