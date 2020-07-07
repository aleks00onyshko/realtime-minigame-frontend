import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(message: string): void {
    this.snackBar.open(message, '', { duration: 2000 });
  }
}
