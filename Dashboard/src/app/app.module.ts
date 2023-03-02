import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NotificationComponent } from './dashboard/header/notification/notification.component';
import { AnnouncementComponent } from './dashboard/header/announcement/announcement.component';
import { ProfileComponent } from './dashboard/header/profile/profile.component';
import { HamburgermenuComponent } from './dashboard/header/hamburgermenu/hamburgermenu.component';
import { CourseListComponent } from './dashboard/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './dashboard/course/course.component';
import { NotificationItemComponent } from './dashboard/header/notification/notification-item/notification-item.component';
import { AnnouncementItemComponent } from './dashboard/header/announcement/announcement-item/announcement-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NotificationComponent,
    AnnouncementComponent,
    ProfileComponent,
    HamburgermenuComponent,
    CourseListComponent,
    CourseComponent,
    NotificationItemComponent,
    AnnouncementItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
