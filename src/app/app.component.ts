import { Component } from '@angular/core';
import { HttpModule }    from "@angular/http";
import { HttpService }	from "./scrvice/http.service"
import { Observable }       from 'rxjs/Observable';


import { HumanInfoComponent } from './component/humanInfo/humaninfo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService,HumanInfoComponent]
})
export class AppComponent {
  title = 'お気に入り';
  ob;

  constructor(private http:HttpService){
  	http.getJSON().subscribe(
          res  => {
            this.ob = res;
          });
  }


  private onClickGet() {

  }
}
