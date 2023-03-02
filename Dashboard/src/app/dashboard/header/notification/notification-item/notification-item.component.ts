import { Component, Input } from '@angular/core';
import { Notification } from 'src/assets/interfaces';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent {
  @Input() notification!: Notification;
  constructor(){}
}
