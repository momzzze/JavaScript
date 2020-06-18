import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: UserComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                }
            }
        ]
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);
