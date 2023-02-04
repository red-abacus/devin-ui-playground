import {Action, createReducer, on} from '@ngrx/store';
import {MyModel} from "../model/model";
import * as dataActions from "../actions/data.actions";

export const stateFeatureKey = 'state';

export interface State {
    data: MyModel | null;
    isLoading: boolean;
    error: any;
}

export const initialState: State = {
    data: null,
    isLoading: false,
    error: null
};

export const reducer = createReducer(
    initialState,
    on(dataActions.loadData, (state, {id}) => ({
        ...state,
        isLoading: true
    })),
    on(dataActions.loadDataSuccess, (state, {data}) => ({
        ...state,
        data,
        isLoading: false
    })),
    on(dataActions.loadDataFailure, (state, {error}) => ({
            ...state,
            error,
            isLoading: false
        })
    ));
