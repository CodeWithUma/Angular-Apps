import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '1-my-first-app-handling-forms';
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.user.setFirstName(suggestedName);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
