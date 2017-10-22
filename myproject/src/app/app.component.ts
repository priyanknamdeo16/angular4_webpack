import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string;
  public hero : Hero;

  constructor () {
    this.title = 'tour of heroes';
    this.hero  = {
      id : 1,
      name : 'priyank'
    };
  }
}

export class Hero {
  public id:number;
  public name:string;
}
