import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { MaterialExampleModule } from '../material.module';
import { SortingComponent } from '../shared/sorting/sorting.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    //YoutubeModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
