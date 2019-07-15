import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WellHistory } from '@models/well.model';
import { UIService } from '@services/ui.service';
import { DeleteWellComponent } from '@well/components/delete-well/delete-well.component';

@Component({
  selector: 'app-well-history',
  templateUrl: './well-history.component.html',
  styleUrls: ['./well-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellHistoryComponent {
  title = 'Change history';
  @Input() changes: WellHistory[];

  constructor(private uiService: UIService) {}

  handleAction(event) {
    if (!event) {
      return;
    }
    this.uiService.openDialog(DeleteWellComponent);
  }
}
