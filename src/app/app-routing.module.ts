import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',component:HomeBannerComponent
  },
  {
    path: 'about',component:AboutComponent
  },
  {
    path: 'contact',component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
