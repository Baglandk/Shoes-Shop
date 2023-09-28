import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProdutComponent } from './container/product-list/produt/produt.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackground } from './CustomeDirectives/SetBackground.directive';
import { HighLightDirective } from './CustomeDirectives/high-light.directive';
import { AppHoverDirective } from './CustomeDirectives/app-hover.directive';
import {Title} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ContainerComponent,
    SearchComponent,
    MainMenuComponent,
    ProductListComponent,
    ProdutComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    SetBackground,
    HighLightDirective,
    AppHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private titleService:Title) {
    this.titleService.setTitle("Shoes Shop");
  }
}
