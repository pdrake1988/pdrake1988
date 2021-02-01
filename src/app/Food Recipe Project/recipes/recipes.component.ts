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
  recipeList: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getApiData().subscribe((recipes) => {
      this.recipeList = recipes.meals;
      console.log(recipes);
    });
  }
  getApiData(): Observable<any> {
    console.log(this.apiData);
    return this.httpClient.get(this.apiData);
  }
}
