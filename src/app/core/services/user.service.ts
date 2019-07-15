import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '@models/user.model';
import {
  getUserFromStorage,
  removeUserFromStorage,
  saveUserToStorage
} from '@utils/local-storage';
import { UIService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiRoot = 'https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin';
  registerURL = `${this.apiRoot}/register`;
  authURL = `${this.apiRoot}/authenticate`;

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private auth = new BehaviorSubject<User>(getUserFromStorage());
  currentUser$: Observable<User> = this.auth.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private uiService: UIService
  ) {}

  getToken(): string {
    return this.auth.value.token;
  }

  login(username: string, password: string) {
    this.uiService.loading(true);
    this.http
      .post<User>(
        this.authURL,
        { username, password },
        { headers: this.httpHeaders }
      )
      .pipe(
        tap((data: User) => {
          saveUserToStorage(data);
          this.auth.next(data);
          this.router.navigateByUrl('/');
          this.uiService.loading(false);
        }),
        catchError(err => this.uiService.handleError(err))
      )
      .subscribe();
  }

  register(username: string, password: string) {
    this.uiService.loading(true);
    this.http
      .post(
        this.registerURL,
        { username, password },
        { headers: this.httpHeaders }
      )
      .pipe(
        tap((data: User) => {
          if (!data) {
            throwError('No result from server when registering user');
          }
          this.login(username, password);
        }),
        catchError(err => this.uiService.handleError(err))
      )
      .subscribe();
  }

  logout() {
    this.auth.next(null);
    removeUserFromStorage();
  }
}
