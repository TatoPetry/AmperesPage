import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../interfaces/video';

const url = 'videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videosCol: AngularFirestoreCollection<Video>;
  videoDoc: AngularFirestoreDocument<Video>;
  videos: Observable<Video[]>;

  constructor(private afs: AngularFirestore) {
    this.videosCol = this.afs.collection(url);

    this.videos = this.videosCol.snapshotChanges()
    .pipe(map( actions => actions.map( a => {
      const data = a.payload.doc.data() as Video;
      const id = a.payload.doc.id;
      return { id, ...data};
    })));
  }

  getvideos() {
    return this.videos;
  }

  postVideo(video: Video) {
    this.videosCol.add(video);
  }

  updateVideo(video: Video, id: string) {
    this.videosCol.doc(id).set(video);
  }

  deleteVideo(id: string) {
    this.videosCol.doc(id).delete();
  }

}
