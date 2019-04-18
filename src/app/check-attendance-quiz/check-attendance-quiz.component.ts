import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService, AttendanceService, AuthService, AppConfig, CheckAttendanceService } from '../shared/shared.module';
 
declare var jQuery:any;
@Component({
    selector: 'app-check-attendance-quiz',
    templateUrl: './check-attendance-quiz.component.html'
})
export class CheckAttendanceQuizComponent implements OnInit {
    public constructor(public checkAttendanceService : CheckAttendanceService,public appConfig: AppConfig ,
        public authService: AuthService, public attendanceService: AttendanceService,  public appService: AppService, public router: Router) {

    }
    public ngOnInit() {
        
    }
}
