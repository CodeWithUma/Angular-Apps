import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement')
  element!: { type: string; name: string; content: string; };

  @Input()
  name!: string;

  constructor() {
    console.log('constructor called!');
  }

  //Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);    
  }

  //Called once the component is initialised
  ngOnInit() {
    console.log('ngOnInit called!');
  } 

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

}
