import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {

  @Input()
  item: Item;

  @Output()
  itemDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.httpClientService.deleteItem(this.item.id).subscribe(
      (item) => {
        this.itemDeletedEvent.emit();
        this.router.navigate(['admin', 'items']);
      }
    );
  }

  editItem() {
    this.router.navigate(['admin', 'items'], { queryParams: { action: 'edit', id: this.item.id } });
  }
}
