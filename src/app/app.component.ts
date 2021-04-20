import { Component } from '@angular/core';
import { Champion } from "./data.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championData : Champion[]=[];
  constructor () {
    this.championData.push(
      {
        name:"Yasuo",
        id: 1,
        desc: "Death is like the wind, always by my side!"
      }
    )
  }
}
