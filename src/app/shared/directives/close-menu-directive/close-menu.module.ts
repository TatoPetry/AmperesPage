import { NgModule } from '@angular/core';
import { CloseMenuDirective } from './close-menu.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ CloseMenuDirective ],
  exports: [ CloseMenuDirective ],
  imports: [ CommonModule ]
})
export class CloseMenuModule {

}
