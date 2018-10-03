import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../interfaces/show';

const url = 'shows';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  showsCol: AngularFirestoreCollection<Show>;
  showDoc: AngularFirestoreDocument<Show>;
  shows: Observable<Show[]>;

  constructor(private afs: AngularFirestore) {
    this.showsCol = this.afs.collection(url);

    this.shows = this.showsCol.snapshotChanges()
    .pipe(map( actions => actions.map( a => {
      const data = a.payload.doc.data() as Show;
      const id = a.payload.doc.id;
      return { id, ...data};
    })));
  }

  getShows() {
    return this.shows;
  }

  postShow(show: Show) {
    this.showsCol.add(show);
  }

  updateShow(show: Show, id: string) {
    this.showsCol.doc(id).set(show);
  }

  deleteShow(id: string) {
    this.showsCol.doc(id).delete();
  }

}
