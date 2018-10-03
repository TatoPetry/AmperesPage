import { NgModule } from '@angular/core';
import { PageCarouselComponent } from './page-carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ PageCarouselComponent ],
  exports: [ PageCarouselComponent ],
  imports: [
    CommonModule
  ]
})
export class PageCarouselModule {}
