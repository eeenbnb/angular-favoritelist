import { Injectable }              from '@angular/core';
import { Http, Response ,Jsonp}          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  private Url = 'https://script.google.com/macros/s/AKfycbxX_pCcL8lVLfgpOoSCU2aY2uaWJzzkq2a4R1J_XCB3zWPld-M/exec?prefix=JSONP_CALLBACK';
  constructor (private jsonp: Jsonp) {}
  getJSON(){
    return this.jsonp.get(this.Url)
               .map(request => <string[]> request.json());
  }
}
