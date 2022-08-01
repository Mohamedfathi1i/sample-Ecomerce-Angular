import { ImgsComponent } from './imgs/imgs.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListDataComponent } from './product/product-list-data/product-list-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  { path: 'productlist', component: ProductListDataComponent },
  { path: 'productdt/:id', component: ProductDetailsComponent },
  { path: 'newproduct', component: AddProductComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user-profile', component: UserProfileComponent , canActivate: [AuthGuard]},
  { path: 'imgs', component: ImgsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
