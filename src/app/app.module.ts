import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ProductgroupComponent } from './components/brand/productgroup/productgroup.component';
import { ProductComponent } from './components/brand/productgroup/product/product.component';
import { ProductdesktopComponent } from './components/brand/productgroup/productdesktop/productdesktop.component';
import { SummaryComponent } from './components/brand/productgroup/summary/summary.component';
import { SaveformComponent } from './components/brand/productgroup/summary/saveform/saveform.component';

import { HttpClientModule } from '@angular/common/http';
import { NotebookComponent } from './components/brand/productgroup/product/notebook/notebook.component';
import { UltrabookComponent } from './components/brand/productgroup/product/ultrabook/ultrabook.component';
import { CompactComponent } from './components/brand/productgroup/productdesktop/compact/compact.component';
import { TowerComponent } from './components/brand/productgroup/productdesktop/tower/tower.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ProductgroupComponent,
    ProductComponent,
    ProductdesktopComponent,
    SummaryComponent,
    SaveformComponent,
    NotebookComponent,
    UltrabookComponent,
    CompactComponent,
    TowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
