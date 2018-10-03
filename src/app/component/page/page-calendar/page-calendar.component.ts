import { Component } from '@angular/core';
import { ShowsService } from '../../../core/sevices/shows.service';
import { Observable } from 'rxjs';
import { Show } from '../../../core/interfaces/show';

@Component({
  selector: 'app-page-calendar',
  templateUrl: './page-calendar.component.html'
})
export class PageCalendarComponent {

  shows: Observable<Show[]>;

  constructor(
    private ss: ShowsService
   ) {
    this.shows = this.ss.getShows();
  }

}
