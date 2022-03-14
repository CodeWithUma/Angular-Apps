import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
// NEW PROPERTY BINDING HAS EEN DECLARED HERE
username = '';

  constructor() { }

  ngOnInit(): void {
  }

  // onCreateServer(){
  //   this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  // }

  // onUpdateServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
  
}
