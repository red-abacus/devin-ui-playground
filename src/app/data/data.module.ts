import { NgModule, Provider } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromData from '../data/reducers/state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyButtonComponent } from './my-button/my-button.component';
import { DataComponent } from './containers/data.component';
import { DemoInterceptor } from './mocks/demo.mock';
import { DataEffects } from './effects/data.effects';
import { from } from 'rxjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MyStateButtonComponent } from './components/my-button/my-state-button.component';


const mockProviders: Provider[] = [
  {provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true}
];

@NgModule({
  declarations: [
    MyStateButtonComponent,
    DataComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forFeature(fromData.stateFeatureKey, fromData.reducer),
    EffectsModule.forFeature([DataEffects]),
  ],
  exports: [
    DataComponent,
    MyStateButtonComponent
  ],
  providers: [
    mockProviders
  ]
})
export class DataModule {
}
