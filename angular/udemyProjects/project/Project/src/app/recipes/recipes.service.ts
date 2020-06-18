import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shopping-list/shoping-list.service';

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'Sometihng like test', 'https://p0.piqsels.com/preview/669/214/526/eat-eating-nordwood-rightlight.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe('A Second test recipe', 'Sometihng like test2', 'https://media.defense.gov/2019/Jun/10/2002142660/780/780/0/190605-F-FR885-023.JPG', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
            new Ingredient('Buns', 2),
        ]),
        new Recipe('A third test recipe', 'Sometihng like test3', 'https://p0.piqsels.com/preview/707/147/709/united-states-springfield-food-recipes.jpg', [
            new Ingredient('Meat deal', 1),
            new Ingredient('French Fries', 20),
        ])
    ];
    constructor(private shopingListService: ShopingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shopingListService.addIngredients(ingredients);
    }

}