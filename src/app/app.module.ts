import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './index';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    StoreModule.forRoot(reducers),
    /**
    * @ngrx/router-store keeps router state up-to-date in the store.
    */
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
     stateKey: 'router',
    }),

    EffectsModule.forRoot([ ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
