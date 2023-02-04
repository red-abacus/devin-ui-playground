import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexComponent} from './layouting/flex/flex.component';
import {GridComponent} from './layouting/grid/grid/grid.component';
import {MyButtonComponent} from './layouting/button/my-button/my-button.component';
import {GridButtonComponent} from "./layouting/button/grid/grid-button.component";

@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    GridComponent,
    GridButtonComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
