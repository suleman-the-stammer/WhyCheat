import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardstatsService } from '../../../core/services/dashboardstats.service';

@Component({
  selector: 'app-dashb',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashb.component.html',
  styleUrl: './dashb.component.scss'
})
export class DashbComponent {
  studentList: any[] = [];
  TeacherList: any[] = [];
  List: any[] = [];
  role: string = "";
  StudentCount: any = "";
  Counter: any = "";
  TeacherCount: any = "";

  constructor(private dashboardstats: DashboardstatsService) { }
  ngOnInit() {
    this.role = localStorage.getItem('role') ?? "";
    this.dashboardstats.onDashboardStats().subscribe((res: any) => {
      console.log(res)
      if (res) {
        console.log(res?.result)
        this.studentList = res?.result?.AllStudents
        this.StudentCount = this.studentList?.length;
        this.Counter = res?.result?.QuizCount;
        this.TeacherList = res?.result?.AllTeachers
        this.TeacherCount = this.TeacherList?.length;
        console.log('---------------',this.TeacherCount)
        if (this.role == 'Teacher') {
          this.List = res?.result?.AllStudents

        } else {
          this.List = res?.result?.AllTeachers
        }



      } else {
        console.error(' failed:', res.message);
      }
    }

    )
  }
}
