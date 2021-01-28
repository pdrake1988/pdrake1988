import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  apiData = 'https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US&include_adult=true&include_video=true';
  movieList: any;
  filterBy;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.filterBy = 'empty';
  }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe( params => {
        this.filterBy = params.filterBy;
    });

    if (this.filterBy !== 'empty' && this.filterBy !== undefined) {
      this.getApiData(`&with_genres=${this.filterBy}`).subscribe((movies) => {
        this.movieList = movies.results;
        console.log(movies);
        console.log(this.apiData);
      });
    } else {
      this.getApiData().subscribe((movies) => {
        this.movieList = movies.results;
        console.log(movies);
        console.log(this.apiData);
      });
    }
  }
  getApiData(genre?: string, sort: string = '&sort_by=popularity', page: string = '&page=1'): Observable<any> {
    if (genre === null || genre === undefined) {
      console.log(`${this.apiData}${sort}${page}`);
      return this.httpClient.get(`${this.apiData}${sort}${page}`);
    }
    else {
      return this.httpClient.get(`${this.apiData}${sort}${genre}${page}`);
    }
  }
}
