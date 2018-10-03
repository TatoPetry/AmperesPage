import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { CommonModule } from '@angular/common';
import { PageSobreComponent } from './page-sobre/page-sobre.component';
import { RouterModule } from '@angular/router';
import { PageVideosModule } from './page-videos/page-videos.module';
import { PageCalendarComponent } from './page-calendar/page-calendar.component';
import { PageCarouselComponent } from './page-carousel/page-carousel.component';
import { PageCarouselModule } from './page-carousel/page-carousel.module';

@NgModule({
  declarations: [
    PageComponent,
    PageCalendarComponent,
    PageSobreComponent,
   ],
  exports: [
    PageComponent
   ],
  imports: [
    PageVideosModule,
    CommonModule,
    RouterModule,
    PageCarouselModule
   ]
})
export class PageModule {}
