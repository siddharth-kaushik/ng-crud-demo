import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { Brand } from '@models/brand.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  icons = [
    'add',
    'arrow-right',
    'delete',
    'edit',
    'link',
    'logo',
    'location',
    'sign-in',
    'sign-out',
  ];

  company: Brand = {
    name: 'XYZ Corporation',
    logo: 'logo',
  };

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    // Register SVG Icons
    for (const icon of this.icons) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `../assets/images/${icon}.svg`,
        ),
      );
    }
  }
}
