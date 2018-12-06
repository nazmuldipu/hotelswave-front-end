import { Component } from '@angular/core';
import { Package } from '../../../shared/model/package.model';
import { PackageList } from 'src/shared/jsons/packages-list';

@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  packages: Package[];
  location = 'All';
  constructor() {
    this.packages = PackageList as Package[];
    // console.log(new Date());
  }
  selectLocation(location: string) {
    this.location = location;
    switch (location) {
      case 'ALL':
        this.packages = PackageList as Package[];
        console.log(this.packages.length);
        break;
      case 'COMBINED':
        console.log('Combined selected');
        break;
      case 'INTERNATIONAL':
        console.log('INTERNATIONAL seleted');
        break;
      default:
        this.packages = PackageList as Package[];
        this.packages = this.packages.filter(
          pack => pack.location === location
        );
        console.log(this.packages.length);
        break;
    }
  }
}
