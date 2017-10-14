import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';

import {
  DynamsoftModule
} from '@sobored/dynamsoft';
import {ZeropadPipe} from './zeropad.pipe';

const dynamsoft_confg = {
  dynamsoft_key: environment.dynamsoft_key
};

@NgModule({
  declarations: [
    AppComponent,
    ZeropadPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,

    DynamsoftModule.forRoot(dynamsoft_confg)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
