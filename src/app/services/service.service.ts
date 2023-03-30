import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  dat  = new Subject <any>();
}
