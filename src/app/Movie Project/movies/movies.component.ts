import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  apiData = 'https://api.themoviedb.org/3/discover/movie?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1';
  movieList: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getApiData().subscribe((movies) => {
      this.movieList = movies.results;
      console.log(movies);
    });
  }
  getApiData(): Observable<any>{
    return this.httpClient.get(this.apiData);
  }
}
