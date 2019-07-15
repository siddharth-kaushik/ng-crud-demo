import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  user$ = this.userService.currentUser$;

  constructor(public router: Router, private userService: UserService) {}

  handleLogout() {
    this.userService.logout();
  }
}
