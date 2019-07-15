import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '@core/services/user.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  newUser: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(tap(param => (this.newUser = param.new_user === 'true')))
      .subscribe();

    this.userService.currentUser$
      .pipe(
        tap(user => {
          if (user) {
            this.router.navigate(['/']);
          }
        }),
        take(1)
      )
      .subscribe();
  }
}
