import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { PageModule } from './component/page/page.module';
import { environment } from '../environments/environment.prod';
import { CalendarFormModule } from './component/calendar-form/calendar-form.module';
import { LoginModule } from './component/login/login.module';
import { AuthService } from './core/sevices/auth.service';
import { ShowsService } from './core/sevices/shows.service';
import { CloseMenuModule } from './shared/directives/close-menu-directive/close-menu.module';
import { PageCarouselModule } from './component/page/page-carousel/page-carousel.module';
import { VideosFormModule } from './component/videos-form/videos-form.module';
import { PageErrorComponent } from './component/page-error/page-error.component';
import { ModalConfirmaModule } from './shared/components/modal-confirma/modal-confirma.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    PageModule,
    CalendarFormModule,
    VideosFormModule,
    LoginModule,
    CloseMenuModule,
    PageCarouselModule,
    ModalConfirmaModule
  ],
  providers: [
    AuthService,
    ShowsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
