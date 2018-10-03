import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from '../../../core/sevices/videos.service';
import { Observable } from 'rxjs';
import { Video } from 'src/app/core/interfaces/video';


@Component({
  selector: 'app-page-videos',
  templateUrl: './page-videos.component.html'

})
export class PageVideosComponent implements OnInit {

  videos: Observable<Video[]>;

  constructor(
    private sanitizer: DomSanitizer,
    private videoService: VideosService) {
      this.videos = this.videoService.getvideos();
    }

  ngOnInit() {


  }

  safeUrl(url: string) {

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
