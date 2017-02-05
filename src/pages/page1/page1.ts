import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlService } from '../../providers/sl-service';
import { Observable } from 'rxjs/Observable';
import { AuthorModel } from '../../app/models/author-model';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [SlService]
})

export class Page1 {
  private searchString = "";
  private placeholder = "";
  constructor(public navCtrl: NavController, private slService: SlService) {
    
  }

  getSlData(){
    this.slService.getAuthors();
  }

  getTest(){
    this.slService.getTestSl();
  }

  getAzure(){
    this.slService.getAzure();
  }

  getSuggestedPlaces(searchString: string){
      (searchString.length > 3) ? this.slService.getSuggestedPlaces(searchString) : "";
  }
}
