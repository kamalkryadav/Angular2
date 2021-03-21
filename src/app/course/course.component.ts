import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(public data : DataService) {
    console.log(this.data.courseList[0].CourseDate.toString())
   }

  ngOnInit(): void {
  }

}
