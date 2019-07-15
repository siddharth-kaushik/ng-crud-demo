import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WellStatus } from '@core/models/well.model';

@Component({
  selector: 'app-well-status',
  templateUrl: './well-status.component.html',
  styleUrls: ['./well-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellStatusComponent implements OnInit {
  codes = Object.values(WellStatus).filter(item => !!isNaN(Number(item)));
  @Input() code: string;

  ngOnInit() {
    // if (!this.codes.includes(this.code)) {
    //   this.code = '-';
    // }
    if (!this.code) {
      this.code = '-';
    }
  }
}
