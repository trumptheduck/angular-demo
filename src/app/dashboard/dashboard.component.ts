import { Component, Input, OnInit } from '@angular/core';
import { VisibilityEventsService } from '../data-exchange.service'
import { ViewState, Champion } from '../data.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() championData: Champion[];
  constructor(private Events:VisibilityEventsService) { }
  cssClass:string = "active";
  ngOnInit(): void {
    this.Events.onVisibilityChange.subscribe((state)=>{
      console.log(state)
      this.update(state)
    })
  }
  update(state:ViewState) {
    if (state.dashboard) {
      this.cssClass = "active"
    } else {
      this.cssClass = ""
    }
  }
}
