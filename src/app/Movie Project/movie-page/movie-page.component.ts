import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movieInfo: any;
  movieId: any;
  providerInfo: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.movieId = param.get('MovieId');
    });
    this.getMovieData(this.movieId).subscribe((info) => {
      this.movieInfo = info;
      console.log(info);
    });
    this.getWatchProviders(this.movieId).subscribe((providers) => {
      this.providerInfo = providers;
      console.log(providers);
    });
  }
  getMovieData(movieId: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=e2e4f004450c3b2d09d61c0fb5120d06&language=en-US`);
  }
  getWatchProviders(movieId: string): Observable<any> {
    return this.httpClient.get(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=e2e4f004450c3b2d09d61c0fb5120d06`);
  }
}
