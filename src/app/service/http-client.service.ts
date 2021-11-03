import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getUsers(){
    return this.httpClient.get<User[]>('https://f1-ecommerce-backend.azurewebsites.net/users/');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('https://f1-ecommerce-backend.azurewebsites.net/users/', newUser);   
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('https://f1-ecommerce-backend.azurewebsites.net/users/' + id);
  }

  getItems() {
    return this.httpClient.get<Item[]>('https://f1-ecommerce-backend.azurewebsites.net/items/');
  }

  addItem(newItem: Item) {
    return this.httpClient.post<Item>('https://f1-ecommerce-backend.azurewebsites.net/items/', newItem);
  }

  deleteItem(id) {
    return this.httpClient.delete<Item>('https://f1-ecommerce-backend.azurewebsites.net/items/' + id);
  }

  updateItem(updatedItem: Item) {
    return this.httpClient.put<Item>('https://f1-ecommerce-backend.azurewebsites.net/items/', updatedItem);
  }
}
