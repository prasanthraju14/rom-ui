  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class orderApiService
{

    constructor(private httpclient: HttpClient) {}
    getOrders(): Observable<any> {
        return this.httpclient.get("http://localhost:8080/rom/orders");
    }
}