import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }
   
  create(users) { 
    return this.db.list('/users').push(users);
  }
  getAll() {
    return this.db.list('/users')
    .snapshotChanges()
    .pipe(map((users:any[]) => users.map(user =>({ ...user.payload.val()}))));
    
  }


}
