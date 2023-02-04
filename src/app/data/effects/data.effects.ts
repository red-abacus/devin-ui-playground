import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from "rxjs";
import * as dataActions from "../actions/data.actions";
import { MyModel } from "../model/model";
import { DataService } from "../services/data.service";

@Injectable()
export class DataEffects {

  constructor(private actions$: Actions, private dataService: DataService) {
  }

  loadData$ = createEffect(() => this.actions$.pipe(
          ofType(dataActions.loadData),
          mergeMap((action: any) => this.dataService.loadData(action.id)
          .pipe(
              map((data: any) => dataActions.loadDataSuccess({data: this.mapData(data)})),
              catchError(error => of(dataActions.loadDataFailure({error})))
          ))
      )
  );

  private mapData(data: any) {
    return new MyModel(data);
  }
}
