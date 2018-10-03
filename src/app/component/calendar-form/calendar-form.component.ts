import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Show } from 'src/app/core/interfaces/show';
import { ShowsService } from '../../core/sevices/shows.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent implements OnInit {

  formShows: FormGroup;
  formShowUpdate: FormGroup;
  show: Observable<Show[]>;
  currentShow: Show;

  constructor(
    private fb: FormBuilder,
    private ss: ShowsService) { }

  ngOnInit() {
    this.formShows = this.fb.group({
      title: ['', Validators.required ],
      description: ['', Validators.required ],
      date: ['', Validators.required ],
      link: ['', Validators.required ],
    });

    this.formShowUpdate = this.fb.group({
      title: ['', Validators.required  ],
      description: ['', Validators.required ],
      date: ['', Validators.required ],
      link: ['', Validators.required ],
    });

    this.show = this.ss.getShows();

  }

  teste() {
    console.log(this.formShows.get('title').errors.required);
  }

  takeCurrentShow(show: Show) {
   this.currentShow = show;
  }

  removeData(id: string) {
   this.ss.deleteShow(id);
  }

  updateForm(formGroup: FormGroup, id: string) {
    const showForm = this.takeForm(formGroup);
    const showId = id;
    this.ss.updateShow(showForm, showId);
  }

  sendForm(formGroup: FormGroup) {
  const showForm =  this.takeForm(formGroup);
  this.ss.postShow(showForm);
  this.formShows.reset();

  }

  takeForm(formGroup: FormGroup) {
    const title = formGroup.get('title').value;
    const description = formGroup.get('description').value;
    const date = formGroup.get('date').value;
    const link = formGroup.get('link').value;
    const showForm = { title: title, description: description, date: date, link: link };
    console.log(showForm);
    return showForm;
  }

}
