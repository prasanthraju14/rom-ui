  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class orderApiService
{

    constructor(private httpclient: HttpClient) {}
    getOrders(): Observable<any> {
        //TODO change this once DNS entry made
        return this.httpclient.get("http://3.234.98.4:8080/rom/orders");
    }
}
