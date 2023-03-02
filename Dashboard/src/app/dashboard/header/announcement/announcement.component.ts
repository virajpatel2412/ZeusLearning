import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement, AnnouncementObject } from 'src/assets/interfaces';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements!: Announcement[];
  private url = '../../../../assets/data/announcements.json';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.fetchAnnouncements().subscribe(res => {
      this.announcements = res.announcements;
    })
  }

  fetchAnnouncements(): Observable<AnnouncementObject>{
    return this.http.get<AnnouncementObject>(this.url);
  }

  showAnnouncement(){
    const announcementArea: HTMLElement|null = document.querySelector('.announcementArea');
    const announcementIcon: HTMLElement|null = document.querySelector('.announcement-icon img');
    const badge: HTMLElement|null = document.querySelector('.announcement-icon span');

    if(announcementIcon && badge && announcementArea){
      announcementArea.style.transform = 'scaleY(1)'
      badge.style.display = 'none';
      announcementIcon.style.filter = 'brightness(0) invert(1)'
    } 
  }

  hideAnnouncement(){
    const announcementArea: HTMLElement|null = document.querySelector('.announcementArea');
    const announcementIcon: HTMLElement|null = document.querySelector('.announcement-icon img');
    const badge: HTMLElement|null = document.querySelector('.announcement-icon span');

    if(announcementIcon && badge && announcementArea){
      announcementArea.style.transform = 'scaleY(0)'
      badge.style.display = 'flex';
      announcementIcon.style.filter = 'brightness(1) invert(0)'
    } 
  }
}
