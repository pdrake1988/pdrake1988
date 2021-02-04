import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  apiData = 'https://www.themealdb.com/api/json/v2/9973533/randomselection.php';
  recipesByName = 'https://www.themealdb.com/api/json/v2/9973533/filter.php?i=';
  recipesByIngredient = 'https://www.themealdb.com/api/json/v2/9973533/filter.php?i=';
  recipesByCategory = 'https://www.themealdb.com/api/json/v2/9973533/filter.php?c=';
  recipeList: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getApiData().subscribe((recipes) => {
      this.recipeList = recipes.meals;
      console.log(recipes);
    });
  }
  getApiData(recipeName?: string, ingredientName?: string, categoryName?: string): Observable<any> {
    if (recipeName !== undefined) {
      return this.httpClient.get(this.recipesByName + recipeName);
    } else if (ingredientName !== undefined) {
      return this.httpClient.get(this.recipesByIngredient + ingredientName);
    }else if (categoryName !== undefined) {
      return this.httpClient.get(this.recipesByCategory + categoryName);
    } else {
      return this.httpClient.get(this.apiData);
    }
  }
  searchByName(event: any): void {
    this.getApiData(event.target.value === undefined || event.target.value === '' ? undefined : event.target.value)
      .subscribe((recipes) => {
        this.recipeList = recipes.meals;
        console.log(recipes);
      });
  }
  searchByIngredient(event: any): void {
    this.getApiData(event.target.value === undefined || event.target.value === '' ? undefined : event.target.value)
      .subscribe((recipes) => {
        this.recipeList = recipes.meals;
        console.log(recipes.meals);
      });
  }
  searchByCategory(event: any): void {
    this.getApiData(event.target.value === undefined || event.target.value === '' ? undefined : event.target.value)
      .subscribe((recipes) => {
        this.recipeList = recipes.meals;
        console.log(recipes.meals);
      });
  }
}
