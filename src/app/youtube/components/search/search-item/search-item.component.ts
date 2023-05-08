import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/admin/models/custom-card.model';
import { Item } from 'src/app/youtube/models/search-item.model';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem?: Item;
  @Input() cardItem?: ICard;

  constructor() { }

  ngOnInit() {

  
  }

}
