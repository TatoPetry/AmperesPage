import { NgModule } from '@angular/core';
import { PageVideosComponent } from './page-videos.component';
import { CommonModule } from '@angular/common';
import { PageCarouselModule } from '../page-carousel/page-carousel.module';

@NgModule({
  declarations: [ PageVideosComponent ],
  exports: [ PageVideosComponent ],
  imports: [
    CommonModule,
    PageCarouselModule
   ]
})
export class PageVideosModule {}
