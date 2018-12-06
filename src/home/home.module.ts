import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PackagesComponent } from './components/packages/packages.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { FollowUsComponent } from './components/follow-us/follow-us.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { NewsLettersComponent } from './components/news-letters/news-letters.component';
import { AddressComponent } from './components/address/address.component';
import { FooterComponent } from './components/footer/footer.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), NgbModule.forRoot()],
  declarations: [
    IndexComponent,
    HomeComponent,
    NavBarComponent,
    HeaderComponent,
    SearchBoxComponent,
    OurServicesComponent,
    PackagesComponent,
    SpecialOffersComponent,
    FollowUsComponent,
    OurPartnersComponent,
    NewsLettersComponent,
    AddressComponent,
    FooterComponent
  ]
})
export class HomeModule {}
