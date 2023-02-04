import {Injectable} from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {data} from './demo.data';

@Injectable({
    providedIn: 'root'
})
export class DemoInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return demoBackend(req.url, req.method, req, req.body) || next.handle(req);
    }
}

export function demoBackend(url: string, method: string, request: HttpRequest<any>, bodyContent: any): any {
    if (!(url.includes('demo'))) {
        return new Observable();
    }

    // Demo call
    if (url.includes('/demo')) {
        switch (method) {
            case 'GET':
                return new Observable(response => {
                    setTimeout(() => {
                        response.next(new HttpResponse<any>({
                            status: 200,
                            body: data
                        }));
                        response.complete();
                    }, 4000);
                });
        }
    }

}
