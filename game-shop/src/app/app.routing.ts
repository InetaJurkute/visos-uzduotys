import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { AddGameComponent } from './components/add-game/add-game.component';

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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
