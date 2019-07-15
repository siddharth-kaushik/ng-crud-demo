import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Hero } from '@models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input() data: Hero;
}
