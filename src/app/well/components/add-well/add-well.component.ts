import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { WellFormComponent } from '@well/components/well-form/well-form.component';

import { UIService } from '@core/services/ui.service';
import { WellService } from '@core/services/well.service';

@Component({
  selector: 'app-add-well',
  templateUrl: './add-well.component.html',
  styleUrls: ['./add-well.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddWellComponent {
  title = 'Add a new well';
  subTitle =
    'Fill out the details to create new well. Unique well identifier and name for the well are required.';

  @ViewChild(WellFormComponent, { static: false })
  formComponent: WellFormComponent;

  constructor(private uiService: UIService, private wellService: WellService) {}

  close() {
    this.uiService.closeDialog();
  }

  add() {
    const form = this.formComponent.form;
    if (form.valid && form.dirty) {
      this.uiService.loading(true);
      this.wellService.add(form.value).subscribe();
    }
  }
}
