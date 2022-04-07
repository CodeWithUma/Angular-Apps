import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c.ndtvimg.com/2020-06/s0ts6gjo_rajma_625x300_04_June_20.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://c.ndtvimg.com/2020-06/s0ts6gjo_rajma_625x300_04_June_20.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
