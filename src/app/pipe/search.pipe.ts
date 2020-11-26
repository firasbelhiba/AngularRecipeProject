import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipe: Recipe[], searchvalue: string): Recipe[] {

    if (!recipe || !searchvalue) {
      return recipe;
    }
    return recipe.filter( recipe => 
      recipe.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()));
  }

}
