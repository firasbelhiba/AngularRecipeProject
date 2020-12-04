import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  inge: Ingredient[];
  id: number;
  searchedIngredient: string;
  selectedItem: string;



  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
      this.inge = this.recipe.ingredients;

    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    //this.router.navigate(['edit'] , {relativeTo: this.route})
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  onSearch() {
    let term = this.searchedIngredient;
    if (this.selectedItem == 'Ingredient') {
      this.recipe.ingredients = this.inge.filter(function (tag) {
        return tag.name.indexOf(term) >= 0;
      });
    }
    else if (this.selectedItem == 'Amount') {
      this.recipe.ingredients = this.inge.filter(ing => {
        return ing.amount.toString().toLocaleLowerCase().match(this.searchedIngredient.toLocaleLowerCase());
      });
    }

    // if (this.searchedIngredient != "") {
    //   this.recipe2.ingredients = this.recipe.ingredients.slice();
    //   this.recipe2.ingredients = this.recipe2.ingredients.filter(ing => {
    //     return ing.name.toLocaleLowerCase().match(this.searchedIngredient.toLocaleLowerCase());
    //   });
    // }
    // else if (this.searchedIngredient != "") {
    //   return this.recipe.ingredients;
    // }
  }

}
