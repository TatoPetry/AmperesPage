import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PageComponent } from './component/page/page.component';
import { PageVideosComponent } from './component/page/page-videos/page-videos.component';
import { PageSobreComponent } from './component/page/page-sobre/page-sobre.component';
import { CalendarFormComponent } from './component/calendar-form/calendar-form.component';
import { PageCalendarComponent } from './component/page/page-calendar/page-calendar.component';
import { VideosFormComponent } from './component/videos-form/videos-form.component';
import { PageErrorComponent } from './component/page-error/page-error.component';
import { AuthguardGuard } from './core/guards/authguard.guard';


const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'page/home',
      component: PageComponent
    },
    {
      path: 'page/videos',
      component: PageVideosComponent
    },
    {
      path: 'page/sobre',
      component: PageSobreComponent
    },
    {
      path: 'page/agenda',
      component: PageCalendarComponent
    }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shows',
    component: CalendarFormComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'videos',
    component: VideosFormComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: '**',
    component: PageErrorComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash:  true})
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
