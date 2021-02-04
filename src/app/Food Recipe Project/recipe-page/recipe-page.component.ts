import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipeID: any;
  recipeData: any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.recipeID = param.get('RecipeId');
    });
    this.getApiData(this.recipeID).subscribe((info) => {
      this.recipeData = info.meals[0];
      console.log(info.meals[0]);
    });
  }
  getApiData(recipeId: string): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${recipeId}`);
  }

}
