import { Component, Output } from '@angular/core';
import { AuthService } from '../../../core/sevices/auth.service';

@Component({
  selector: 'app-modal-confirma',
  templateUrl: './modal-confirma.component.html'
})
export class ModalConfirmaComponent {

  constructor(public authS: AuthService) {}

}
