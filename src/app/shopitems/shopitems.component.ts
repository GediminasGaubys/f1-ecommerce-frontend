import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model/Item';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopitems',
  templateUrl: './shopitems.component.html',
  styleUrls: ['./shopitems.component.css']
})
export class ShopitemsComponent implements OnInit {

  items:Array<Item>;
  itemsRecieved: Array<Item>;
  selectedItem: Item;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){
    this.httpClientService.getItems().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const selectedItemId = params['id'];
        if (selectedItemId) {
          this.selectedItem = this.items.find(item => item.id === +selectedItemId);
        }
      }
    );
  }
  
  handleSuccessfulResponse(response: Item[]) {
    this.items = response;
  }
}
