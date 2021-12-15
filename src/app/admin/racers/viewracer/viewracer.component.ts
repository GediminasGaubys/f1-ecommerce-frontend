import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Racer } from 'src/app/model/Racer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewracer',
  templateUrl: './viewracer.component.html',
  styleUrls: ['./viewracer.component.css']
})
export class ViewracerComponent implements OnInit {

  @Input()
  racer: Racer;

  @Output()
  racerDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteRacer() {
    this.httpClientService.deleteRacer(this.racer.id).subscribe(
      (racer) => {
        this.racerDeletedEvent.emit();
        this.router.navigate(['admin', 'racers']);
      }
    );
  }

  editRacer() {
    this.router.navigate(['admin', 'racers'], { queryParams: { action: 'edit', id: this.racer.id } });
  }
}
