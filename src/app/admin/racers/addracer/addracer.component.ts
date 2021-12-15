import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racer } from 'src/app/model/Racer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-addracer',
  templateUrl: './addracer.component.html',
  styleUrls: ['./addracer.component.css']
})
export class AddracerComponent implements OnInit {

  @Input()
  racer: Racer;

  @Output()
  racerAddedEvent = new EventEmitter();
  
  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveRacer() {
    //If there is no book id then it is an add book call else it is an edit book call
    if (this.racer.id == null) {
      this.httpClientService.addRacer(this.racer).subscribe(
        (racer) => {
          this.racerAddedEvent.emit();
          this.router.navigate(['admin', 'racers']);
        }
      );
    } else {
      this.httpClientService.updateRacer(this.racer).subscribe(
        (racer) => {
          this.racerAddedEvent.emit();
          this.router.navigate(['admin', 'racers']);
        }
      );
    }
  }
}
