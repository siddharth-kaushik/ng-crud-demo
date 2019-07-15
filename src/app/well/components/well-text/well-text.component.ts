import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-well-text',
  templateUrl: './well-text.component.html',
  styleUrls: ['./well-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellTextComponent {
  @Input() key: string;
  @Input() value: string | number;
  @Input() unit: string;
}
