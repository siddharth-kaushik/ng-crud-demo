import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-well-timestamp',
  templateUrl: './well-timestamp.component.html',
  styleUrls: ['./well-timestamp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellTimestampComponent {
  constructor() {}
}
