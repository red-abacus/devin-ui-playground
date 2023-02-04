import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {DataEffects} from './effects/data.effects';
import {StoreModule} from "@ngrx/store";
import * as dataReducer from "./reducers/state.reducer"
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DemoInterceptor} from "./mocks/demo.mock";
import {DataComponent} from './containers/data.component';
import {MyStateButtonComponent} from "./components/my-button/my-state-button.component";

const mockProviders: Provider[] = [
    {provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true}
];

@NgModule({
    declarations: [
        MyStateButtonComponent,
        DataComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature(dataReducer.stateFeatureKey, dataReducer.reducer),
        EffectsModule.forFeature([DataEffects]),
    ],
    providers: [
        mockProviders
    ],
    exports: [
        MyStateButtonComponent,
        DataComponent
    ]
})
export class DataModule {

}
