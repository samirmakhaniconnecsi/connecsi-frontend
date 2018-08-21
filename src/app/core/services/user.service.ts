import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    private domain: string;
    constructor(
        private httpClient: HttpClient
    ) {
        this.domain = "http://kiranpadwaltestconnecsi.pythonanywhere.com";
    }
    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', `application/json`);
    }

    loginService(body): Observable<any> {
        const url = this.domain + "/api/User/login";
        return this.httpClient.post(url, body, { observe: 'response' }).pipe(
            map((res: HttpResponse<any>) => {
                return res;
            },
                error => {
                    return error;
                }));
    }

}