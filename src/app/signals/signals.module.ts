import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalsRoutingModule } from './signals-routing.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { UsersServiceService } from './services/userService.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CounterPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    SignalsLayoutComponent,
    UserInfoPageComponent,

  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    HttpClientModule

  ],
  providers: [
    UsersServiceService
  ],
  exports: [
  ],

})
export class SignalsModule { }
