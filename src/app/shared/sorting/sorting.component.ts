import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  @Output() sortEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  startSort() {
    this.sortEvent.emit(true);
  }

}
