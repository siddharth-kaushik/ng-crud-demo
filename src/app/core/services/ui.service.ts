import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/compiler/src/core';
import { BehaviorSubject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private dialogRef: MatDialogRef<any>;
  private loadingStatus = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingStatus.asObservable();

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}

  private showSnackBar(message: string, duration = 5000) {
    console.log(message);
    this.snackBar.open(message, 'Dismiss', {
      duration,
      horizontalPosition: 'start',
    });
  }

  loading(value: boolean): void {
    this.loadingStatus.next(value);
  }

  handleError(err: HttpErrorResponse) {
    this.loadingStatus.next(false);
    this.closeDialog();
    console.log(err);
    if (typeof err.error === 'string') {
      this.showSnackBar(`${err.status}: ${err.error}`);
      return EMPTY;
    }
    this.showSnackBar(`${err.status}: ${err.statusText}`);
    return EMPTY;
  }

  openDialog(component: ComponentType<any>) {
    this.dialogRef = this.dialog.open(component);
  }

  closeDialog() {
    if (!this.dialogRef) {
      return;
    }
    this.dialogRef.close();
  }
}
