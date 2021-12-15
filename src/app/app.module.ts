import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { ItemsComponent } from './admin/items/items.component';
import { AdditemComponent } from './admin/items/additem/additem.component';
import { ViewitemComponent } from './admin/items/viewitem/viewitem.component';
import { ShopitemComponent } from './shopitem/shopitem.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RacersComponent } from './admin/racers/racers.component';
import { AddracerComponent } from './admin/racers/addracer/addracer.component';
import { ViewracerComponent } from './admin/racers/viewracer/viewracer.component';
import { ShopitemsComponent } from './shopitems/shopitems.component';
import { ShopracersComponent } from './shopracers/shopracers.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ItemsComponent,
    AdditemComponent,
    ViewitemComponent,
    ShopitemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    RacersComponent,
    AddracerComponent,
    ViewracerComponent,
    ShopitemsComponent,
    ShopracersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
