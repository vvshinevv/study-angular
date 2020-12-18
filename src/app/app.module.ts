import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { GotcharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GotcharacterComponent,
    DirectiveExampleComponent,
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
