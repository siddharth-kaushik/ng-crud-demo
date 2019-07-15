import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { WellActions, WellHistory } from '@models/well.model';
import { calculateTimeDifference } from '@utils/time';

@Component({
  selector: 'app-well-history-item',
  templateUrl: './well-history-item.component.html',
  styleUrls: ['./well-history-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellHistoryItemComponent implements OnInit {
  diff: string;
  actions = WellActions;
  @Input() item: WellHistory;

  ngOnInit() {
    this.diff = calculateTimeDifference(this.item.changeDate);
  }

  getActionString() {
    return WellActions[this.item.action];
  }
}
