import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService , private authService : AuthService ) { }


    storeRecipes() {
        const recipes = this.recipeService.getRecipes();

        // put because every date in the firebase will be overwritten ;)

        this.http.put('https://espritprojetcc.firebaseio.com/recipes.json',
            recipes)
            .subscribe(reponse => {
                console.log(reponse);
            });
    }

    fetchRecipes() {
        
        this.http.get<Recipe[]>('https://espritprojetcc.firebaseio.com/recipes.json').subscribe(
            recipes  => {
                this.recipeService.setRecipes(recipes);
                
            }
        )
    }

}