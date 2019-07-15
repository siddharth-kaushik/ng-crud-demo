import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { EditWellComponent } from '@well/components/edit-well/edit-well.component';

import { UIService } from '@core/services/ui.service';
import { Well, WellProps } from '@models/well.model';

@Component({
  selector: 'app-well-details',
  templateUrl: './well-details.component.html',
  styleUrls: ['./well-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellDetailsComponent {
  title = 'Well Details';
  props = WellProps;
  @Input() well: Well;

  constructor(private uiService: UIService) {}

  formatDate(isoDate: string) {
    return new Date(isoDate);
  }

  handleAction(event) {
    if (!event) {
      return;
    }
    this.uiService.openDialog(EditWellComponent);
  }
}
