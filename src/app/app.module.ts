import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { GotcharacterComponent } from './gotcharacter/gotcharacter.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GotcharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
