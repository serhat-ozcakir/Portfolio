import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Privacy } from './pages/privacy/privacy';
import { Legal } from './pages/legal/legal';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'privacy',
        component: Privacy
    },
    {
        path:'legal',
        component: Legal
    },
     { path: '**', 
       redirectTo: '' }
    
];
