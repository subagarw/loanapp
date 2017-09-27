import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { HttpErrorResponse } from "@angular/common/http";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class SsnService
{
    private Url = 'https://192.86.32.92:9443/loanapptest01/Item';
    headers;
    options;
    Data;
    constructor(private _http: Http){    }
    getCustomer( ssn ): Observable<any>
    {
        let username: string = 'Fred';
        let password: string = 'fredpwd';
        let headers: Headers = new Headers();
        headers.append('Authorization', 'Basic '+ btoa('Fred:fredpwd'));

        return this._http.get(this.Url+"/"+ssn, {headers: headers})
        .do(data => console.log('ALL: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse)
    {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}