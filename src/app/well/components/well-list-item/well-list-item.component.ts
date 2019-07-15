import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Well } from '@models/well.model';

@Component({
  selector: 'app-well-list-item',
  templateUrl: './well-list-item.component.html',
  styleUrls: ['./well-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellListItemComponent {
  @Input() well: Well;

  constructor() {}

  getStatusCode() {
    if (!this.well.status) {
      return;
    }
    return this.well.status.trim().toLowerCase();
  }
}
