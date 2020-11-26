import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Pipe({
  name: 'searchIng'
})
export class SearchIngPipe implements PipeTransform {

  transform(ingredient: Ingredient[], searchvalue: string): Ingredient[] {

    if (!ingredient || !searchvalue) {
      return ingredient;
    }
    return ingredient.filter(ingredient =>
      ingredient.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()));
  }

}
