import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { RegionComponent } from './region/region.component';
import { Region1Component } from './region1/region1.component';

const routes: Routes = [
  {​​​​​ path:'',component:HomeComponent}​​​​​,
  {​​​​​ path:'home',component:HomeComponent}​​​​​,
  {​​​​​ path:'regions',component:RegionComponent}​​​​​,
  {​​​​​ path:'countries',component:PaysComponent}​​​​​,
  {​​​​​ path:'countries/:region',component:Region1Component}​​​​​,
  {​​​​​ path:'country/:pay',component:DetailsComponent}​​​​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
