import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  Well,
  WellPlaceholders,
  WellProps,
  WellStatus
} from '@models/well.model';
import { WellService } from '@services/well.service';
import { getValuesFromEnum } from '@utils/enum';

@Component({
  selector: 'app-well-form',
  templateUrl: './well-form.component.html',
  styleUrls: ['./well-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellFormComponent implements OnInit {
  @Input() well: Well;

  codes = getValuesFromEnum(WellStatus);
  label = WellProps;
  placeholder = WellPlaceholders;

  form = this.fb.group({
    uwid: ['', Validators.required],
    wellName: ['', Validators.required],
    licenseNumber: '',
    drillDate: null,
    area: '',
    field: '',
    totalDepth: null,
    status: ''
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.well) {
      this.form.patchValue(this.well);
    }
  }
}
