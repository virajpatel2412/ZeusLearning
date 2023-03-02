import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';

import { Course } from 'src/assets/interfaces';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{
  CourseList: Course[] = [];
  
  constructor(private datafetch: DataFetchService) {
  };

  ngOnInit(): void {
    this.datafetch.getData().subscribe(res => {
      this.CourseList = res.courses;
    })
  }

}
