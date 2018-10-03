import { NgModule } from '@angular/core';
import { ModalConfirmaComponent } from './modal-confirma.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ ModalConfirmaComponent ],
  exports: [ ModalConfirmaComponent ],
  imports: [
    CommonModule,
    RouterModule ]
})
export class ModalConfirmaModule {}
