import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Brand } from '@models/brand.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() brand: Brand;

  logoURL: string;
}
