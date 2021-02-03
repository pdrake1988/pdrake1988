import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './Movie Project/movies/movies.component';
import { HomeComponent } from './Home/home/home.component';
import { MoviePageComponent } from './Movie Project/movie-page/movie-page.component';
import { CocktailsComponent } from './Cocktail Project/cocktails/cocktails.component';
import { RecipesComponent } from './Food Recipe Project/recipes/recipes.component';
import {CocktailPageComponent} from './Cocktail Project/cocktail-page/cocktail-page.component';
import { RecipePageComponent } from './Food Recipe Project/recipe-page/recipe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    MoviePageComponent,
    CocktailsComponent,
    RecipesComponent,
    CocktailPageComponent,
    RecipePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
