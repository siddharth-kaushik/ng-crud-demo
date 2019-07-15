import { ChangeDetectionStrategy, Component } from '@angular/core';

import * as copy from '@assets/copy.json';
import { Hero } from '@models/hero.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {
  content: Hero = copy.pageNotFound;
}
