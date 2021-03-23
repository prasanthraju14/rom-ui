import { Component, ɵEMPTY_ARRAY } from '@angular/core';
import { orderApiService } from './services/romorderapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rom-ui';
  list_rom_orders: any;
  first_time = 0;
  searchStr = '*';

  constructor(private _orderApiService: orderApiService) {

  }
 
  ngOnInit() {
    this.search('*');
  }

  public search(searchStr : String) {
    //alert("called search api!");
    console.log('search function called.', searchStr);
    this._orderApiService.getOrders(searchStr)
    .subscribe
    (
      data=>
      {
        console.log('Data is received - Result - ', data);
          this.list_rom_orders = data;
      }
    )
  }
}
