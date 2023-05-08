import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { concatMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';
import { ResultsService } from 'src/app/youtube/services/results.service';

import { getVideos } from 'src/app/store/actions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { combineLatest, concat, forkJoin, from, fromEvent, interval, merge, Observable, of, ReplaySubject } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { IResponseItem } from 'src/app/youtube/models/search-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() searchEvent = new EventEmitter<string>();
  // @Output() sortHeaderEvent = new EventEmitter<boolean>();
  // results: Item[] = [];

  constructor(
    private resultService: ResultsService,
    public authService: AuthService,
    private store: Store<{videos: Item[]}>
  ) { }

  ngOnInit(): void {
  }

  // searchResults(value: string) {
  //   this.searchEvent.emit(value);
  // }

  // sortHeader(value: boolean) {
  //   this.sortHeaderEvent.emit(value);
  // }

  searchResults(value: string) {
    if (!value) return;
    this.resultService.getSearchData(value).pipe(
      map(data => {
        return data.items.map(element => {
          return element.id.videoId;
        })
      }),
      mergeMap(y => this.resultService.getVideos(y.join()))
    )
    .subscribe(data => {
      let videos = data.items;
      this.store.dispatch(getVideos({videos}))
    });
  }

}

