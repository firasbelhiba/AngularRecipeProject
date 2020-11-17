import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pizza',
            'Tuna Fish Pizza',
            'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg',
            [new Ingredient('Tuna Fish', 100)]),
        new Recipe('Spaghetti',
            'Mozzarella Meat-Balls',
            'https://cdn.pixabay.com/photo/2015/04/29/12/48/spaghetti-745468__340.jpg',
            [new Ingredient('sauce', 1), new Ingredient('meat balls', 5)])

    ];
    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}