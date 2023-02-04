import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyModel} from "../model/model";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    static readonly API_DEMO_BASE_PATH = `http://localhost/demo/url`;

    constructor(private http: HttpClient) {
    }

    loadData(id: string) {
        return this.http.get<MyModel>(`${DataService.API_DEMO_BASE_PATH}`);
    }
}
