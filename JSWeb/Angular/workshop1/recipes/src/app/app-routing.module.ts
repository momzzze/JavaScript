import { NgModule } from '@angular/core'
import { Routes, Route, RouterModule } from "@angular/router"
import { SignupComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeModule } from './recipe/recipe.module';

const routes: Route[] = [
    {
        path: 'auth', children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
        ]
    },
    {
        path: 'recipes', loadChildren: () => RecipeModule,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRouterModule {

}