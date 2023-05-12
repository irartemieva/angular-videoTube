import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { concatMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/youtube/models/search-item.model';
import { ResultsService } from 'src/app/youtube/services/results.service';

import { getVideos } from 'src/app/store/actions';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private resultService: ResultsService,
    public authService: AuthService,
    private store: Store<{videos: Item[]}>
  ) { }

  ngOnInit(): void {
  }

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

