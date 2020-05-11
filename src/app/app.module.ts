import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  ToastModule, MessageService, ButtonModule, DropdownModule } from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { BasicDropdownComponent } from './basic-dropdown/basic-dropdown.component';


@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule, DropdownModule,ButtonModule],
  declarations: [ AppComponent, BasicDropdownComponent,],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[BasicDropdownComponent]
})
export class AppModule { }
