import { Component, OnInit } from '@angular/core';


export interface Video {
  video: string;
  url: string;
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }


}
