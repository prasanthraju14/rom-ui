  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class orderApiService
{

    constructor(private httpclient: HttpClient) {}
    getOrders(searchStr : String): Observable<any> {
        //TODO change this once DNS entry made
        return this.httpclient.get("http://localhost:8080/rom/search/"+searchStr);
        //return this.httpclient.get("http://3.234.98.4:8080/rom/search/"+searchStr);
    }
}
