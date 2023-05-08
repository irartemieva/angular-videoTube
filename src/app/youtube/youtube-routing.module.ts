import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { CardDetailedInfoComponent } from './pages/card-detailed-info/card-detailed-info.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  },
  {
    path: 'videos/:id',
    component: CardDetailedInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
