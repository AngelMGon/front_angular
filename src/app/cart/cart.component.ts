import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { OrdersService} from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:any[];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
      });
   }

  ngOnInit() {
     this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    let total:number = 0;
    let productIds:number[] = [];
    this.items.forEach(element => {
      total = total + element.price;
      productIds.push(element.id);
    });

    let user: any = JSON.parse(sessionStorage.getItem('user'));
    
    this.ordersService.saveOrder(user.id, total,productIds).subscribe((data: any[])=>{

    })  

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    

    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted');
    this.router.navigateByUrl('orders');
  }

}