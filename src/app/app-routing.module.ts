import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  // {path:'app',component:AppComponent},
  // {path:'', redirectTo: '/home', pathMatch:'full'},
   {path:'lazy', loadChildren:() => import('./lazyload/lazyload.module').then(mod=>mod.LazyloadModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
