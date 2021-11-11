import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { PersonItemComponent } from './components/person-item/person-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
