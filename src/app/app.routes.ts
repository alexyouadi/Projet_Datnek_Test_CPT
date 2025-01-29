
import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';


export const appRoutes: Route[] = [


    {
        path:'',
        component:NxWelcomeComponent,
        pathMatch:'full'
    },
    // {
    //     path: 'events',
    //     loadComponent: () =>
    //       import('@datnek-app/events').then(m => m.EventsComponent),
    //   },
];
