import { Component, VERSION } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any = (data as any).default;
  product_category;
  newproducts: any;
  quantity;
  enter = false;
  prodcat = this.products.filter(d => d.p_category);

  onChange(val) {
    this.products = (data as any).default;
    this.products = this.products.filter(d => d.p_category === val);
    console.log(this.products);
  }
  confirm(val, name) {
    this.enter = true;
    this.products.map(item => {
      if (item.p_name === name) {
        item['p_quantity'] = val;
      }
      console.log(this.products);
    });
  }
}
