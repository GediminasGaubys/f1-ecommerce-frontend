import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racer } from 'src/app/model/Racer';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-racers',
  templateUrl: './racers.component.html',
  styleUrls: ['./racers.component.css']
})
export class RacersComponent implements OnInit {

  racers: Array<Racer>;
  selectedRacer: Racer;
  action: string;
  racersReceived: Array<Racer>;
  
  constructor(private httpClientService: HttpClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){
    this.httpClientService.getRacers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const selectedRacerId = params['id'];
        if (selectedRacerId) {
          this.selectedRacer = this.racers.find(racer => racer.id === +selectedRacerId);
        }
      }
    );
  }
  
  handleSuccessfulResponse(response: Racer[]) {
    this.racers = response;
  }

  addRacer() {
    this.selectedRacer = new Racer();
    this.router.navigate(['admin', 'racers'], { queryParams: { action: 'add' } });
  }

  viewRacer(id: number) {
    this.router.navigate(['admin', 'racers'], { queryParams: { id, action: 'view' } });
  }
}
