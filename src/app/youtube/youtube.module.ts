import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchComponent } from './components/search/search.component';
import { CardDetailedInfoComponent } from './pages/card-detailed-info/card-detailed-info.component';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CoreModule } from '../core/core.module';
import { MaterialExampleModule } from '../material.module';
import { CardBorderDirective } from './directives/card-border.directive';
import { AuthGuard } from '../core/guards/auth.guard';


@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SearchComponent,
    CardDetailedInfoComponent,
    MainComponent,
    PageNotFoundComponent,
    CardBorderDirective
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialExampleModule,
    YoutubeRoutingModule
  ],
  exports: [
    MainComponent,
    SearchResultsComponent,
    CardBorderDirective
  ],
})
export class YoutubeModule { }
