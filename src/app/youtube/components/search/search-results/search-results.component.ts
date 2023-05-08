import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';
import { Store } from '@ngrx/store';

import { resetVideos, getCustomCards } from '../../../../store/actions';
import { ICard } from 'src/app/admin/models/custom-card.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  videos$ = this.store.select('videos');
  cards$ = this.store.select('cards');
  customCards: ICard[] = [];

  constructor(
    private store: Store<{videos: Item[], cards: ICard[]}>
  ) {
    this.store.dispatch(resetVideos());
   }

  ngOnInit(): void {

  }
  
}
