import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { AdSectionComponent } from './ad-section/ad-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    BannerComponent,
    ProductComponent,
    ProductItemComponent,
    FooterComponent,
    AdSectionComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
