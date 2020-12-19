import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { GotcharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GotcharacterComponent,
    DirectiveExampleComponent,
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
