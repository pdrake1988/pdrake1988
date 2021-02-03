import { Component, OnInit, Renderer2 } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  apiData = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php';
  cocktailList: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getApiData().subscribe((cocktails) => {
      this.cocktailList = cocktails.drinks;
      console.log(cocktails);
    });
  }
  getApiData(): Observable<any> {
    console.log(this.apiData);
    return this.httpClient.get(this.apiData);
  }
}
