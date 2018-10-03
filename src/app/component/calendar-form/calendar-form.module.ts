import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarFormComponent } from './calendar-form.component';
import { RouterModule } from '@angular/router';
import { IsValidModule } from '../../shared/directives/is-valid-directive/is-valid.module';


@NgModule({
  declarations: [
    CalendarFormComponent
  ],
  exports: [
    CalendarFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IsValidModule
  ]
})
export class CalendarFormModule {

}
