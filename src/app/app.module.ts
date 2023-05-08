import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './youtube/components/search/search.component';
import { SearchResultsComponent } from './youtube/components/search/search-results/search-results.component';
import { SearchItemComponent } from './youtube/components/search/search-item/search-item.component';
import { SortingComponent } from './shared/sorting/sorting.component';
import { RegistrationFormComponent } from './auth/registration-form/registration-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { CreateCardComponent } from './admin/create-card/create-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { StoreModule } from '@ngrx/store';

import {MaterialExampleModule} from './material.module';
//import { SettingsComponent } from './core/components/header/settings/settings.component';
import { CardBorderDirective } from './youtube/directives/card-border.directive';
import { SortingPipe } from './youtube/pipes/sorting.pipe';
import { cardReducer, videosReducer } from './store/reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './youtube/pages/page-not-found/page-not-found.component';
import { CardDetailedInfoComponent } from './youtube/pages/card-detailed-info/card-detailed-info.component';
import { MainComponent } from './youtube/pages/main/main.component'; // Angular CLI environment
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //SearchComponent,
    //SearchResultsComponent,
    //SearchItemComponent,
    //SortingComponent,
    //RegistrationFormComponent,
    //LoginFormComponent,
    //CreateCardComponent,
    //SettingsComponent,
    //CardBorderDirective,
    //SortingPipe,
    //PageNotFoundComponent,
    //CardDetailedInfoComponent,
    //MainComponent
  ],
  imports: [
    BrowserModule,
    YoutubeModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({videos: videosReducer, cards: cardReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
