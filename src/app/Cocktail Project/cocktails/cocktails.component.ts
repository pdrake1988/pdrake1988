import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  apiData = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php';
  cocktailsByName = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=';
  cocktailsByIngredient = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=';
  cocktailList: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getApiData().subscribe((cocktails) => {
      this.cocktailList = cocktails.drinks;
      console.log(cocktails);
    });
  }
  getApiData(cocktailName?: string, ingredientName?: string): Observable<any> {
    if (cocktailName !==  undefined){
      return this.httpClient.get(this.cocktailsByName + cocktailName);
    } else if (ingredientName !== undefined) {
      return this.httpClient.get(this.cocktailsByIngredient + ingredientName);
    } else {
      return this.httpClient.get(this.apiData);
    }
  }
  searchByName(event: any): void {
    this.getApiData(event.target.value === undefined || event.target.value === '' ? undefined : event.target.value)
      .subscribe((cocktails) => {
        this.cocktailList = cocktails.drinks;
        console.log(cocktails);
      });
  }
  searchByIngredient(event: any): void {
    this.getApiData(event.target.value === undefined || event.target.value === '' ? undefined : event.target.value)
      .subscribe((cocktails) => {
        this.cocktailList = cocktails.drinks;
        console.log(cocktails);
      });
  }
}
