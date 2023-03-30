import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component {
  name = " "
  email = " "
  constructor(private _ser:ServiceService){
    console.log("creating card 2")

    // Subscirbed the service dat so that whenever something in dat updates this subscribe method is called
    this._ser.dat.subscribe( dat=>{
      console.log(dat)
      //Assigned the name and email from the dat's email and name.
      this.name = dat.value['name']
      this.email = dat.value['email']
    })

  }
}
