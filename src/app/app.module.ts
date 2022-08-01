import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListDataComponent } from './product/product-list-data/product-list-data.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { StringSlicePipe } from './product/string-slice.pipe';
import { FavoritProductComponent } from './product/favorit-product/favorit-product.component';
import { ProductCartComponent } from './product/product-cart/product-cart.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardeffectDirective } from './product/cardeffect.directive';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ImgsComponent } from './imgs/imgs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListDataComponent,
    ProductCardComponent,
    StringSlicePipe,
    FavoritProductComponent,
    ProductCartComponent,
    ProductDetailsComponent,
    NavbarComponent,
    NotFoundComponent,
    CardeffectDirective,
    AddProductComponent,
    LoginComponent,
    UserProfileComponent,
    ImgsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
