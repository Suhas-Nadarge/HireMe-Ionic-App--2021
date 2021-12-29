import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject<any>();

  sendJobPostedNotification(message: string) {
      this.subject.next({ text: message });
  }

  clearJobPostedNotification() {
      this.subject.next();
  }

  getJobPostedNotification(): Observable<any> {
      return this.subject.asObservable();
  }
}
