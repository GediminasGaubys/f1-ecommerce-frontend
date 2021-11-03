import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/Item';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.css']
})
export class ShopitemComponent implements OnInit {

  items: Array<Item>;
  itemsRecieved: Array<Item>;
  cartItems: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getItems().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartItems = JSON.parse(data);
    } else {
      this.cartItems = [];
    }
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.items = new Array<Item>();
    //get books returned by the api call
    this.itemsRecieved = response;
    for (const item of this.itemsRecieved) {

      const itemwithRetrievedImageField = new Item();
      itemwithRetrievedImageField.id = item.id;
      itemwithRetrievedImageField.name = item.name;
      //populate retrieved image field so that book image can be displayed
      itemwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + item.picByte;
      itemwithRetrievedImageField.racer = item.racer;
      itemwithRetrievedImageField.price = item.price;
      itemwithRetrievedImageField.picByte = item.picByte;
      this.items.push(itemwithRetrievedImageField);
    }
  }

  addToCart(itemId) {
    let item = this.items.find(item => {
      return item.id === +itemId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');

    if (data !== null) {
      cartData = JSON.parse(data);
    }

    cartData.push(item);

    this.updateCartData(cartData);

    localStorage.setItem('cart', JSON.stringify(cartData));

    item.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartItems = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartItems = [];
    localStorage.clear();
  }
}
