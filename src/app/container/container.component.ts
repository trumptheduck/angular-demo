import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VisibilityEventsService } from '../data-exchange.service'
import { ViewState, Champion } from '../data.model'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  @Input() championData: Champion[];
  viewState: ViewState = {
    champions: false,
    dashboard: true
  };
  constructor(private Events:VisibilityEventsService) { 
    this.viewState.champions = false;
    this.viewState.dashboard = true;
  }

  ngOnInit(): void {
    
  }
  
  changeView(index:number):void {
    switch (index) {
      case 0:
        this.viewState.champions = false;
        this.viewState.dashboard = true;
        break;
      case 1:
        this.viewState.champions = true;
        this.viewState.dashboard = false;
        break;
      default: return;
    }
    this.Events.emitEvent(this.viewState)
  }
  getStyle(index:number):string{
    switch (index) {
      case 0:
        if (this.viewState.dashboard) {return 'active'} else {return ''}
      case 1:
        if (this.viewState.champions) {return 'active'} else {return ''}
      default: return '';
    }
  }

}
