import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/Item';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  @Input()
  item: Item;
  private selectedFile;
  imgURL: any;

  @Output()
  itemAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  saveItem() {
    if (this.item.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;
  
      this.httpClient.post('https://f1-ecommerce-backend.azurewebsites.net/items/image/', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addItem(this.item).subscribe(
              (item) => {
                this.itemAddedEvent.emit();
                this.router.navigate(['admin', 'items']);
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
       );
    } else {
      this.httpClientService.updateItem(this.item).subscribe(
        (item) => {
          this.itemAddedEvent.emit();
          this.router.navigate(['admin', 'items']);
        }
      );
    }
  }
}
