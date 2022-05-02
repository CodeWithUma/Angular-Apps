import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '1-my-first-app-reactive-handling-forms';
  genders = ['male', 'female'];
  signupForm: FormGroup | any;
}
