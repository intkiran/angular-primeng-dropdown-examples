import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  ToastModule, MessageService, ButtonModule, DropdownModule } from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { BasicDropdownComponent } from './basic-dropdown/basic-dropdown.component';
import { OptionlabelComponent } from './optionlabel/optionlabel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule,FormsModule, DropdownModule,ButtonModule],
  declarations: [ AppComponent, OptionlabelComponent ,BasicDropdownComponent, OptionlabelComponent,],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
