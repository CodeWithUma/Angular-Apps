import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1-my-first-app-concepts';
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
}