import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../models/search-item.model';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-card-detailed-info',
  templateUrl: './card-detailed-info.component.html',
  styleUrls: ['./card-detailed-info.component.scss']
})
export class CardDetailedInfoComponent implements OnInit {
  selectedId: string = '';
  searchItem$?: Observable<Item|undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resultsService: ResultsService
  ) { }

  ngOnInit() {
    this.searchItem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.resultsService.getVideo(params.get('id')!))
    )
  }

}
