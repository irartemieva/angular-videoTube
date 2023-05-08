import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IResponseItem } from '../models/search-response.model';
import { IResultItem, Item } from '../models/search-item.model';
import { Store } from '@ngrx/store';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ResultsService {
  apiKey: string = 'AIzaSyCiuVbYZx9svyp7oxU2vInUZoZOzEYskOA';
  commonUrl: string = 'https://www.googleapis.com/youtube/v3/search?key=';
  videosUrl: string = 'https://www.googleapis.com/youtube/v3/videos?key=';
  searchParams: string = '&type=video&part=snippet&maxResults=15&q=';

  videos$ = this.store.select('videos');

  constructor(
    private http:HttpClient,
    private store: Store<{videos: Item[]}>
    ) { }

  // Get data from the search url
  getSearchData(searchValue: string): Observable<IResponseItem> {
    return this.http.get<IResponseItem>(`${this.commonUrl}${this.apiKey}${this.searchParams}${searchValue}`);
  }

  // Get videos
  getVideos(videoId: string): Observable<IResultItem> {
    return this.http.get<IResultItem>(`${this.videosUrl}${this.apiKey}&id=${videoId}&part=snippet,statistics`);
  }

  getVideo(id: string): Observable<Item | undefined> {
    return this.videos$.pipe(
      map((videos: Item[]) => videos.find(video => video.id === id)!)
    );
  }

}