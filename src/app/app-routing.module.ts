import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './admin/items/items.component';
import { UsersComponent } from './admin/users/users.component';
import { ShopitemComponent } from './shopitem/shopitem.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RacersComponent } from './admin/racers/racers.component';
import { ShopracersComponent } from './shopracers/shopracers.component';
import { ShopitemsComponent } from './shopitems/shopitems.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/items', component: ItemsComponent },
  { path: 'shop', component: ShopitemComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin/racers', component: RacersComponent },
  { path: 'racers', component: ShopracersComponent },
  { path: 'items', component: ShopitemsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
