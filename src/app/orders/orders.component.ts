import { Component, OnInit } from '@angular/core';
import { OrdersService} from '../orders.service';
import { ProductService} from '../product.service';

export interface Order {
  id: number;
  products: number[];
  total: number;
  date: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'products', 'total', 'date'];
  dataSource;
  products;

  constructor(
    private ordersService: OrdersService,
    private productService: ProductService
    ) { }

  ngAfterViewInit() {
    this.getProducts();

    let orders:Order[] = [];
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.ordersService.getOrderByUser(user.id).subscribe((data: any[])=>{
      data.forEach( (order) => {
        let products: number[] = order.products;
        let productNames: string = '';
        console.log( productNames)
        orders.push({id: order.id, products: products, total: order.total, date: order.creationDate})

      });
      this.dataSource = orders;
    })  

    
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((data: any)=>{
      console.log(data);
      this.products = data;
    })  

  }

  ngOnInit(): void {
    
  }

}
