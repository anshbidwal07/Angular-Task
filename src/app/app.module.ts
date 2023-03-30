import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';

// import { MatButtonModule} from '@angular/material/button'
// import { MatSidenavModule} from '@angular/material/sidenav'
// import { MatToolbarModule} from '@angular/material/toolbar';
// import { MatIconModule} from '@angular/material/icon';
// import { MatListModule} from '@angular/material/list';
// import { MatCardModule} from '@angular/material/card';
// import { MatTableModule} from '@angular/material/table';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule} from '@angular/forms';
// import { HomeComponent } from './dashboard/home/home.component';
// import { CardsComponent } from './dashboard/cards/cards.component';
// import { Card1Component } from './dashboard/card1/card1.component';
// import { Card2Component } from './dashboard/card2/card2.component';
// import { Card4Component } from './dashboard/card4/card4.component';
// import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // CardsComponent,
    // Card1Component,
    // Card2Component,
    // Card4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    // MatListModule,
    // MatTableModule,
    // MatCardModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    // MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App Module Loaded')
  }
 }
