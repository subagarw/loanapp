import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SsnComponent } from './ssn/ssn.component'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SsnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
