import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UIService } from '@core/services/ui.service';
import { WellService } from '@core/services/well.service';

@Component({
  selector: 'app-delete-well',
  templateUrl: './delete-well.component.html',
  styleUrls: ['./delete-well.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteWellComponent {
  title = 'Are you sure?';
  subTitle = 'You want to delete the well and related details.';

  constructor(private uiService: UIService, private wellService: WellService) {}

  close() {
    this.uiService.closeDialog();
  }

  delete() {
    this.uiService.loading(true);
    this.wellService.delete().subscribe();
  }
}
