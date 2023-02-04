import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexComponent} from './layouting/flex/flex.component';
import {GridComponent} from './layouting/grid/grid/grid.component';
import {MyButtonComponent} from './componentification/my-button/my-button.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {DataModule} from "./state/data.module";

@NgModule({
    declarations: [
        AppComponent,
        FlexComponent,
        GridComponent,
        MyButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreDevtoolsModule.instrument(),
        DataModule
    ],
    providers: [],
    exports: [
        MyButtonComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
