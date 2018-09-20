import { Injectable } from '@angular/core'
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from "rxjs/operators"
import { RecipeList } from './models/recipe-list.model';
import { RecipeCreate } from './models/recipe-create.model';
const baseUrl = "https://recipes-c9302.firebaseio.com/recipes/"



@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    constructor(private http: HttpClient) { }

    getAllRecipes() {
        return this.http.get(`${baseUrl}.json`).pipe(map((res: Response) => {
            const ids = Object.keys(res)
            const recipes: RecipeList[] = []
            for (const i of ids) {
                recipes.push(new RecipeList(i, res[i].name, res[i].imagePath, res[i].description))
            }

            return recipes
        }))
    }

    createRecipe(body: RecipeCreate) {
        return this.http.post(`${baseUrl}.json`, body);
    }

    getById(recipeId: string) {
        return this.http.get<RecipeList>(`${baseUrl}${recipeId}/.json`);
    }

    editRecipe(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deleteRecipe(recipeId: string) {
     
        return this.http.delete(`${baseUrl}${recipeId}/.json`);
    }
}