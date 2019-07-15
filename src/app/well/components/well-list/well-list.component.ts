import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UIService } from '@core/services/ui.service';
import { Well } from '@models/well.model';
import { WellService } from '@services/well.service';
import { AddWellComponent } from '@well/components/add-well/add-well.component';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellListComponent {
  @Input() list: Well[];
  title = 'List of Wells';
  icon = 'add';
  selectedIndex = 0;

  constructor(private wellService: WellService, private uiService: UIService) {}

  selectWell(item: Well, index: number) {
    this.selectedIndex = index;
    this.wellService.selectWell(item.id);
  }

  handleAction(event) {
    if (event !== 'add') {
      return;
    }
    this.uiService.openDialog(AddWellComponent);
  }
}
