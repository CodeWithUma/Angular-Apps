import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { AccountsService } from './account.services';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [AppComponent, NewAccountComponent, AccountComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
