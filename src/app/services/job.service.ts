import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private db: AngularFirestore) { }
  postJob(data: any): any {
    const jobData = JSON.parse(JSON.stringify(data));
    return this.db.collection('jobs').add(jobData);
    
  }

  getAllJobs(): Observable<any> {
    const users = this.db.collection<any>('jobs').snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          c => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data()
          }));
      }));
    return users;
  }
}

