import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() actionText = 'submit';

  @Output() action = new EventEmitter<{ userName: string; password: string }>();

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  handleAction() {
    if (this.form.invalid) {
      return;
    }
    this.action.emit(this.form.value);
  }
}
