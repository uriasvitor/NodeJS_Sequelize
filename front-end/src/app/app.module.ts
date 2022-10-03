import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AddComponent } from './core/components/add/add.component';
import { listComponent } from './core/components/list/list.component';
import { scrollDownDirective } from './core/directive/scrollDown.directive';
import { CardDetailsComponent } from './core/components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    listComponent,
    AddComponent,
    scrollDownDirective,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
