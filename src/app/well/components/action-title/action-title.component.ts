import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { User } from '@models/user.model';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-action-title',
  templateUrl: './action-title.component.html',
  styleUrls: ['./action-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionTitleComponent {
  user$: Observable<User> = this.userService.currentUser$;

  @Input() title: string;
  @Input() value: number;
  @Input() total: number;
  @Input() icon: 'add' | 'edit' | 'delete';

  @Output() action = new EventEmitter<any>();

  constructor(private userService: UserService) {}

  handleAction(event: MouseEvent) {
    event.preventDefault();
    this.action.emit(this.icon);
  }
}
