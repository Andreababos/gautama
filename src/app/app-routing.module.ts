import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { MembersComponent } from './members/members.component';
import { ContactComponent } from './contact/contact.component';
import { AgeverifierComponent } from './ageverifier/ageverifier.component';
import { VerifyGuardService as VerifyGuard } from './verify-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [VerifyGuard]},
  { path: 'about', component: AboutComponent, canActivate: [VerifyGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [VerifyGuard] },
  { path: 'gautama', component: MembersComponent, canActivate: [VerifyGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [VerifyGuard] },
  { path: 'verify', component: AgeverifierComponent},
  { path: '**', redirectTo: '', canActivate: [VerifyGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
