import { Component } from '@angular/core';
import { orderApiService } from './services/romorderapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rom-ui';
  list_rom_orders: any;

  constructor(private _orderApiService: orderApiService) {

  }
 
  ngOnInit() {

    this._orderApiService.getOrders()
    .subscribe
    (
      data=>
      {
          this.list_rom_orders = data;

      }
    )
  }
}
