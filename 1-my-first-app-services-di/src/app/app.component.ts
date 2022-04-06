import { Component } from '@angular/core';
import { AccountService } from './account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '1-my-first-app-services-di';
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
