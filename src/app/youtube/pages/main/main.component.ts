import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // isResult: boolean = false;
  // isSorting: boolean = false;
  // searchingValue: string = '';

  constructor() {}
  
  ngOnInit(): void {
    
  }

  // searchResults(value: string) {
  //   this.searchingValue = value;
  //   this.isResult = !!value;
  //   this.isSorting = false;
  // }

  // sortingResults(value: boolean) {
  //   this.isSorting = value;
  //   this.isResult = false;
  // }

}
