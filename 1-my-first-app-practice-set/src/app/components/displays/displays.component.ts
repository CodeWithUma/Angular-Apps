import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.css']
})
export class DisplaysComponent implements OnInit {

  showSecret = false;
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  constructor() { }
 
  ngOnInit(): void {
  }

}
