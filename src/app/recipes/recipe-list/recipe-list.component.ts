import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg'),
    new Recipe('A test recipe', 'This is a test', 'https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg')
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
