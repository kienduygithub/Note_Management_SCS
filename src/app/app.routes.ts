import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutWrapper } from './pages/Layout~/layout';
import { HomePage } from './pages/Home/home.component';
import { DetailsNote } from './pages/Note/Details/details-note';
import { UpdateNote } from './pages/Note/Update/update-note';
import { SharedNotes } from './pages/Shared-Notes/shared-notes';
import { Trash } from './pages/Trash/trash';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutWrapper,
        children: [
            {
                path: 'home',
                title: 'Note - Home',
                component: HomePage
            },
            {
                path: 'single-note',
                title: 'Note - Details',
                component: DetailsNote
            },
            {
                path: 'update-note',
                title: 'Note - Update',
                component: UpdateNote
            },
            {
                path: 'shared-notes',
                title: 'Note - Shared',
                component: SharedNotes
            },
            {
                path: 'trash-notes',
                title: 'Note - Trash',
                component: Trash
            }
        ]
    }
];
