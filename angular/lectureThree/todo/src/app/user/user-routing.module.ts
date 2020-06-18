import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../auth.guard'
import { UserResover } from './user.resolver';


const routes: Routes = [

    {
        path: 'user',

        canActivate: [AuthGuard],
        data: {
            roles: []
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/user/list'
            },
            {
                path: 'list',
                resolve: {
                  userList:UserResover
                },
                component: ListComponent
            },
            {
                path: ':id',
                component: UserComponent
            }
        ]
    }
];



export const UserRoutingModule = RouterModule.forChild(routes)