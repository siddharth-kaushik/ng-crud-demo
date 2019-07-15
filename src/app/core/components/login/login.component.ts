
import { Component } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Welcome back';
  subTitle = 'enter your email and password to continue.';
  buttonText = 'Sign in';

  constructor(private userService: UserService) {}

  onLogin({ username, password }) {
    this.userService.login(username, password);
  }
}
