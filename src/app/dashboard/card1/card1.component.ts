import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {

  cardForm = new FormGroup({
    name:  new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email,Validators.required])
  })



  constructor(private _serv:ServiceService){

  }

  onSubmit(){
    const service = new ServiceService();
    this._serv.dat.next(this.cardForm)
  }

  get name(){
    return this.cardForm.get('name')
  }

  get email(){
    return this.cardForm.get('email')
  }

}
