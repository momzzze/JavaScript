import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: RecipeStartComponent },
    { path: 'start', component: RecipeStartComponent },
    { path: 'create', component: RecipeCreateComponent },
    { path: 'details/:id', component: RecipeDetailsComponent },
    { path: 'edit/:id', component: RecipeEditComponent },
    { path: 'list', component: RecipeListComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class RecipeRoutingModule{}