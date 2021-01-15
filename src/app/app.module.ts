import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionComponent } from './region/region.component';
import { PaysComponent } from './pays/pays.component';   
import {​​​​​ HttpClientModule }​​​​​ from'@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { Region1Component } from './region1/region1.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegionComponent,
    PaysComponent,
    DetailsComponent,
    Region1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
