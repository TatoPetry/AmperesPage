import { NgModule } from '@angular/core';
import { VideosFormComponent } from './videos-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsValidModule } from '../../shared/directives/is-valid-directive/is-valid.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ VideosFormComponent ],
  exports: [ VideosFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IsValidModule,
    RouterModule
   ]
})
export class VideosFormModule {

}
