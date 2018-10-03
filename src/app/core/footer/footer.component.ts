import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sevices/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  constructor(public authS: AuthService) {  }

  ngOnInit() {
  }



}
