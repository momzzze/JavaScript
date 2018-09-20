import {NgModule} from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
    declarations:[
       RecipeStartComponent,
       RecipeDetailsComponent,
       RecipeListComponent,
       RecipeCreateComponent,
       RecipeEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RecipeRoutingModule
    ]
})

export class RecipeModule{}