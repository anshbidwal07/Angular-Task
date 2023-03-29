import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component {
  name = ""
  email = ""
  constructor(private _ser:ServiceService){
    console.log("creating card 2")

    this._ser.dat.subscribe( dat=>{
      console.log(dat)
      this.name = dat.value['name']
      this.email = dat.value['email']
    })

  }
}
