import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GisellmazoModule } from 'gisellmazo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GisellmazoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
