import { Component } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  title = 'Create account';
  subTitle = 'enter email and password for registration.';
  buttonText = 'Register';

  constructor(private userService: UserService) {}

  onRegister({ username, password }) {
    this.userService.register(username, password);
  }
}
