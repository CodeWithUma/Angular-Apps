import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles:[`
  .online{
    color: white;
  }`]
})
export class ServerComponent implements OnInit {
  serverID: number = 10;            // STRING INTERPOLATION METHOD HAS BEEN USED HERE
  serverStatus: string = 'offline'; // STRING INTERPOLATION METHOD HAS BEEN USED HERE

  // HERE METHOD HAS BEEN DEFINED
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
