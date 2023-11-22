import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { ProductSearchComponent } from './product-search/product-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

import { CartState } from './stores/cart.state';

@NgModule({
  declarations: [
	AppComponent,
    ProductSearchComponent,
    ProductComponent,
    CatalogComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	CommonModule,
    FormsModule,
    HttpClientModule,
	NgxsModule.forRoot([CartState]), /* Ici, on aura les classes du Store */ 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
