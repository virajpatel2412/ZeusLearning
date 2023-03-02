import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Notification, NotificationObject } from 'src/assets/interfaces';
// import { val } from ''

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
  notifications!: Notification[] ;
  private url = '../../../../assets/data/notifications.json';

  constructor(private http: HttpClient){
  }

  ngOnInit() {
    this.fetchNotification().subscribe((res => {
      this.notifications = res.notifications;
    }))
  }

  fetchNotification(): Observable<NotificationObject>{
    return this.http.get<NotificationObject>(this.url)
  }

  showNotification(){
    const notificationArea: HTMLElement|null = document.querySelector('.notificationArea');
    const alertIcon: HTMLElement|null = document.querySelector('.alert-icon img');
    const badge: HTMLElement|null = document.querySelector('.alert-icon span');
    if(alertIcon && badge && notificationArea){
      notificationArea.style.transform = 'scaleY(1)'
      badge.style.display = 'none';
      alertIcon.style.filter = 'brightness(0) invert(1)'
    }
  }

  hideNotification(){
    const notificationArea: HTMLElement|null = document.querySelector('.notificationArea');
    const alertIcon: HTMLElement|null = document.querySelector('.alert-icon img');
    const badge: HTMLElement|null = document.querySelector('.alert-icon span');
    if(alertIcon && badge && notificationArea){
      notificationArea.style.transform = 'scaleY(0)'
      badge.style.display = 'flex';
      alertIcon.style.filter = 'brightness(1) invert(0)'
    }
  }
}
