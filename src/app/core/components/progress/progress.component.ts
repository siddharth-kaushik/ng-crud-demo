import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UIService } from '@core/services/ui.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
  loading$ = this.uiService.loading$;

  constructor(private uiService: UIService) {}
}
