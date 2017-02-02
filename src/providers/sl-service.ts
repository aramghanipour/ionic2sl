import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SlModel } from '../app/models/sl-model';
import { AuthorModel } from '../app/models/author-model';

/*
  Generated class for the SlService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SlService {
  private slRealTimeApiKey = "75f623dbb95e43c7bc2f89aa9695ca30";
  private slSuggestedPlacesApiKey = "ce888553d33f433d97f54b8bca411f50";

  private slUrl = 'http://api.sl.se/api2/realtimedeparturesV4.json?key=' + this.slRealTimeApiKey + '&siteid=9192&timewindow=10?callback=parseResponse';

  private authorsApiUrl = 'http://localhost/bookfinderapi/api/authors/getall';
  authors: AuthorModel[];
  sl: SlModel[];

  constructor(public http: Http) {
    console.log('Hello SlService Provider');
  }

  getSuggestedPlaces(searchString: string){
    var url = 'http://api.sl.se/api2/typeahead.json?key=' + this.slSuggestedPlacesApiKey +  '&searchstring=' + searchString + '&stationsonly=true&maxresults=10';
    return this.http.get(url)
    .map((res: Response) => res.json() as any)
    .subscribe(data => console.log(data),
              err => console.log(err),
              () => console.log("") as any);
  }

  getTestSl(){
    return (this.http.get(this.slUrl)
    .map((res: Response) => res.json()) as any)
    .subscribe(data => console.log(data), 
                       err => console.log(err), 
                       () => console.log("")) as any;
  }

  getAuthors(){
    return (this.http.get(this.authorsApiUrl)
    .map((res: Response) => res.json()) as any)
    .subscribe(data => this.authors = data, 
               err => console.log(err), 
               () => console.log(this.authors)) as any;
  }

}