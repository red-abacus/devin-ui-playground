import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlexComponent } from './layouting/flex/flex.component';
import { GridComponent } from './layouting/grid/grid/grid.component';
import { MyButtonComponent } from './componentification/my-button/my-button.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataModule } from "./data/data.module";
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    GridComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    StoreModule.forRoot({}, {
      metaReducers: [],
      runtimeChecks: {
        strictActionImmutability: false,
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    DataModule
  ],
  providers: [],
  exports: [
    MyButtonComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
