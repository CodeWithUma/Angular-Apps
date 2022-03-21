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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

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
OnDestroy,
ContentChild {
  @Input('srvElement')
  element!: { type: string; name: string; content: string; };

  @Input()
  name!: string;

  @ViewChild('heading')
  header: ElementRef | any;

  @ContentChild('contentParagraph') paragraph: ElementRef | any;

  constructor() {
    console.log('constructor called!');
  }
  descendants: boolean | any;
  emitDistinctChangesOnly: boolean | any;
  first: boolean | any;
  read: any;
  isViewQuery: boolean | any;
  selector: any;
  static?: boolean | undefined;

  //Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);    
  }

  //Called once the component is initialised
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content:' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  } 

  //Some lifecycle hooks

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  
  ngAfterViewInit(){
    console.log("ngAfterViewInit called!");
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
