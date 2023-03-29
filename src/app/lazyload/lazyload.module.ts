import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', component:LazyComponent},
]

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyloadModule { 
  constructor(){
    console.log('Lazy Module Loaded')
  }
}
