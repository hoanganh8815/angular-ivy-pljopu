import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeopleComponent } from './Components/People/people.component';

import { PeopleListComponent } from './Components/PeopleList/people-list.component';
import { GgLoginComponent } from './Components/Gglogin/gg-login.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PeopleComponent,
    PeopleListComponent,
    GgLoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
