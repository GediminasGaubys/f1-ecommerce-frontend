import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from '../../../model/User';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  @Input()
  user: User

  @Output()
  userAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
