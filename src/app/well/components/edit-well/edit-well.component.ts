import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';

import { WellFormComponent } from '@well/components/well-form/well-form.component';

import { UIService } from '@core/services/ui.service';
import { WellService } from '@core/services/well.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-well',
  templateUrl: './edit-well.component.html',
  styleUrls: ['./edit-well.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditWellComponent {
  well = this.wellService.getSelectedWell();
  title = 'Edit the well';
  subTitle = 'Some description for editing well details.';

  @ViewChild(WellFormComponent)
  formComponent: WellFormComponent;

  constructor(private uiService: UIService, private wellService: WellService) {}

  close() {
    this.uiService.closeDialog();
  }

  update() {
    const form = this.formComponent.form;
    if (form.valid && form.dirty) {
      this.uiService.loading(true);
      this.wellService.update(form.value).subscribe();
    }
  }
}
