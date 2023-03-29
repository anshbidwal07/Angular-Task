import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = []
  private _jsonURL = 'assets/sample_json_data.json';

  // HttpClient Module is used get/send data from different sources
  constructor(private http: HttpClient, private _ServiceService:ServiceService) {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.dataSource = data
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}