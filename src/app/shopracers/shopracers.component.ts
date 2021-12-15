import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Racer } from '../model/Racer';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopracers',
  templateUrl: './shopracers.component.html',
  styleUrls: ['./shopracers.component.css']
})
export class ShopracersComponent implements OnInit {

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
}
