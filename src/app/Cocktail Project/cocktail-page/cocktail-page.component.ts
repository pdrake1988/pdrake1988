import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent implements OnInit {
  cocktailId: any;
  cocktailData: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.cocktailId = param.get('CocktailId');
    });
    this.getApiData(this.cocktailId).subscribe((info) => {
      this.cocktailData = info.drinks[0];
      console.log(info.drinks[0]);
    });
  }
  getApiData(cocktailId: string): Observable<any> {
    return this.httpClient.get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${cocktailId}`);
  }
}
