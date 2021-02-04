import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './Movie Project/movies/movies.component';
import {HomeComponent} from './Home/home/home.component';
import {MoviePageComponent} from './Movie Project/movie-page/movie-page.component';
import {CocktailsComponent} from './Cocktail Project/cocktails/cocktails.component';
import {RecipesComponent} from './Food Recipe Project/recipes/recipes.component';
import {CocktailPageComponent} from './Cocktail Project/cocktail-page/cocktail-page.component';
import {RecipePageComponent} from './Food Recipe Project/recipe-page/recipe-page.component';

const routes: Routes = [
  {path: 'RecipePage/:RecipeId', component: RecipePageComponent},
  {path: 'CocktailPage/:CocktailId', component: CocktailPageComponent},
  {path: 'MoviePage/:MovieId', component: MoviePageComponent},
  {path: 'Recipes', component: RecipesComponent},
  {path: 'Cocktails', component: CocktailsComponent},
  {path: 'Movies', component: MoviesComponent},
  {path: 'Home', component: HomeComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
