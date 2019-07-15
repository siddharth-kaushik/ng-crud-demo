import { Component, OnInit } from '@angular/core';

import * as copy from '@assets/copy.json';
import { Hero } from '@models/hero.model';
import { WellService } from '@services/well.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  content: Hero = copy.hero;

  wells$ = this.wellService.wells$;
  selectedWell$ = this.wellService.selectedWell$;
  changeHistory$ = this.wellService.wellChanges$;

  constructor(private wellService: WellService) {}
}
