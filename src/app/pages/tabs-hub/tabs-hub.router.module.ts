import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsHubPage} from './tabs-hub.page';

const routes: Routes = [
    {
        path: '',
        component: TabsHubPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'workouts',
                children: [
                    {
                        path: '',
                        loadChildren: '../workouts/workouts.module#WorkoutsPageModule'
                    }
                ]
            },
            {
                path: 'exercises',
                children: [
                    {
                        path: '',
                        loadChildren: '../exercises/exercises.module#ExercisesPageModule'
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: '../settings/settings.module#SettingsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/hub/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/hub/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsHubPageRoutingModule {
}
