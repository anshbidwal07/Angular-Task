import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule} from '@angular/material/button'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';


import {ReactiveFormsModule} from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card4Component } from './card4/card4.component'



@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    Card1Component,
    Card2Component,
    Card4Component,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { 
  constructor(){
    console.log('DashBoard Module Loaded')
  }
}
