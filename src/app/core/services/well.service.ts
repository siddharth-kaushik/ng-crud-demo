import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Well, WellActions, WellHistory } from '@models/well.model';
import { UIService } from './ui.service';

import { UserService } from '@core/services/user.service';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  share,
  switchMap,
  tap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WellService {
  private action: 'add' | 'update' | 'delete';
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private uiService: UIService
  ) {}

  // API
  apiRoot = 'https://mcdan-coding-exercise.azurewebsites.net/api/v1/well';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // -> Refresh list
  refresh$ = new BehaviorSubject<boolean>(null);

  // -> Fetch list of wells
  wells$ = this.refresh$.pipe(exhaustMap(() => this.loadWells$));
  loadWells$: Observable<Well[]> = this.http
    .get<Well[]>(this.apiRoot, { headers: this.httpHeaders })
    .pipe(
      tap(list => (list = list.reverse())),
      tap(list => {
        if (this.action !== 'update') {
          this.wellSelectionChange.next(list[0].id);
        }
      }),
      tap(console.log),
      catchError(err => this.uiService.handleError(err)),
      share()
    );

  // -> Well ID on selection
  private wellSelectionChange = new BehaviorSubject<string>(null);
  wellSelectionChange$: Observable<
    string
  > = this.wellSelectionChange.asObservable();

  private selectedWell = new BehaviorSubject<Well>(null);
  selectedWell$: Observable<Well> = combineLatest(
    this.wellSelectionChange$,
    this.wells$
  ).pipe(
    map(([id, wells]) => (wells as Well[]).find(well => well.id === id)),
    tap(well => this.selectedWell.next(well)),
    tap(console.log),
    share()
  );

  // -> Fetch change history of well
  wellChanges$: Observable<WellHistory[]> = this.wellSelectionChange$.pipe(
    filter(id => !!id),
    switchMap(id =>
      this.http.get<WellHistory[]>(`${this.apiRoot}/${id}/history`).pipe(
        tap(console.log),
        catchError(err => this.uiService.handleError(err))
      )
    )
  );

  private getAuthHeaders(): HttpHeaders {
    return this.httpHeaders.append(
      'Authorization',
      `Token ${this.userService.getToken()}`
    );
  }

  getSelectedWell() {
    console.log(this.selectedWell.value);
    return this.selectedWell.value;
  }

  selectWell(selectedWellId: string | null): void {
    console.log(selectedWellId);
    this.wellSelectionChange.next(selectedWellId);
  }

  // -> Add a new well
  add(well: Well) {
    return this.http
      .post(this.apiRoot, well, { headers: this.getAuthHeaders() })
      .pipe(
        tap(console.log),
        tap(_ => {
          this.action = 'add';
          this.uiService.loading(false);
          this.uiService.closeDialog();
          this.refresh$.next(true);
        }),
        catchError(err => this.uiService.handleError(err))
      );
  }

  // -> Update well
  update(well: Well) {
    return this.http
      .put(`${this.apiRoot}/${this.wellSelectionChange.value}`, well, {
        headers: this.getAuthHeaders()
      })
      .pipe(
        tap(console.log),
        tap(_ => {
          this.action = 'update';
          this.uiService.loading(false);
          this.uiService.closeDialog();
          this.refresh$.next(true);
        }),
        catchError(err => this.uiService.handleError(err))
      );
  }

  // -> Delete selected well
  delete(): Observable<boolean> {
    return this.http
      .delete<boolean>(`${this.apiRoot}/${this.wellSelectionChange.value}`, {
        headers: this.getAuthHeaders()
      })
      .pipe(
        tap(_ => {
          this.action = 'delete';
          this.uiService.loading(false);
          this.uiService.closeDialog();
          this.refresh$.next(true);
        }),
        catchError(err => this.uiService.handleError(err))
      );
  }
}
