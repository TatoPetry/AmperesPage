import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Video } from 'src/app/core/interfaces/video';
import { VideosService } from '../../core/sevices/videos.service';

@Component({
  selector: 'app-videos-form',
  templateUrl: './videos-form.component.html',
  styleUrls: ['./videos-form.component.css']
})
export class VideosFormComponent implements OnInit {

  formVideos: FormGroup;
  formVideoUpdate: FormGroup;
  videos: Observable<Video[]>;
  currentVideo: Video;


  constructor(
    private videoService: VideosService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formVideos = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.formVideoUpdate = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.videos = this.videoService.getvideos();

  }

  replaceUrl( url: string) {
    const urlEmbed = 'https://www.youtube.com/embed/';
    const urlOriginal = url;
    const textoReplace = 'https://www.youtube.com/watch?v=';
    const idYoutube = urlOriginal.substr(urlOriginal.indexOf(textoReplace) + textoReplace.length);
    return urlEmbed + idYoutube;
  }

  takeCurrentVideo(video: Video) {
    this.currentVideo = video;
   }

   removeData(id: string) {
    this.videoService.deleteVideo(id);
   }

   updateForm(formGroup: FormGroup, id: string) {
     const videoForm = this.takeForm(formGroup);
     const videoId = id;
     this.videoService.updateVideo(videoForm, videoId);
   }

   sendForm(formGroup: FormGroup) {
   const videoForm =  this.takeForm(formGroup);
   this.videoService.postVideo(videoForm);
   this.formVideos.reset();

   }

   takeForm(formGroup: FormGroup) {
     const title: string = formGroup.get('title').value;
     const url = this.replaceUrl(formGroup.get('url').value);
     const videoForm = { title: title, url: url };
     console.log(videoForm);
     return videoForm;

   }


}
