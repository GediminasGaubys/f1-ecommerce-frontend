import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

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

  // refreshData() {
  //   this.httpClientService.getItems().subscribe(
  //     response => this.handleSuccessfulResponse(response)
  //   );
  //   this.activedRoute.queryParams.subscribe(
  //     (params) => {
  //       const id = params['id'];
  //       this.action = params['action'];
  //       if (id) {
  //         this.selectedItem = this.items.find(item => {
  //           return item.id === +id;
  //         });
  //       }
  //     }
  //   );
  // }

  // handleSuccessfulResponse(response) {
  //   this.items = new Array<Item>();
  //   this.itemsRecieved = response;
    
  //   for (const item of this.itemsRecieved) {
  //     const itemWithRetrievedImageField = new Item();
  //     itemWithRetrievedImageField.id = item.id;
  //     itemWithRetrievedImageField.name = item.name;
  //     itemWithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + item.picByte;
  //     itemWithRetrievedImageField.raceriD = item.raceriD;
  //     itemWithRetrievedImageField.price = item.price;
  //     itemWithRetrievedImageField.picByte=item.picByte;
  //     this.items.push(itemWithRetrievedImageField);
  //   }
  // }

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

  addItem() {
    this.selectedItem = new Item();
    this.router.navigate(['admin', 'items'], { queryParams: { action: 'add' } });
  }

  viewItem(id: number) {
    this.router.navigate(['admin', 'items'], { queryParams: { id, action: 'view' } });
  }
}
