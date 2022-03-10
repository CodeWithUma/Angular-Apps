import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','this is simply a test','https://c.ndtvimg.com/2020-06/s0ts6gjo_rajma_625x300_04_June_20.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
