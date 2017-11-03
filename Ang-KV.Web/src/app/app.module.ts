import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ProductsComponent } from './Products/ProductsComponent';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HomeComponent, ProductsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
