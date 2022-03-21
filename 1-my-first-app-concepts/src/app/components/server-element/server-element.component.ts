import { Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit, 
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
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

  //Some lifecycle hooks

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
    
  }

}
