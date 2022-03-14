import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaysComponent } from './components/displays/displays.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { UsernameComponent } from './components/username/username.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaysComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    UsernameComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
