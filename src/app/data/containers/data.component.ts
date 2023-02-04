import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as dataActions from "../actions/data.actions"

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.scss']
})
export class DataComponent {

    constructor(private store: Store<any>) {
    }

    onClick() {
        this.store.dispatch(dataActions.loadData({id: "pipi"}))
    }
}
