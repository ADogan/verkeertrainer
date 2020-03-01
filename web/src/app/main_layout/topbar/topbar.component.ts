import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { ExamStatsService } from 'src/app/services/exam-stats/exam-stats.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  currentPath: any;
  numberOfStartedQuizzes: number;
  numberOfFinishedQuizzes: number;

  constructor(private router: Router, private examStatsService:  ExamStatsService ) {
  }

  ngOnInit() {
    this.router.events.subscribe( ( event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentPath = event.url;
      }
    });

    this.startListeningToExamStats();
  }

  startListeningToExamStats() {
    this.examStatsService.getExamStats().forEach(( d) => {
      this.numberOfStartedQuizzes = d.examStarted;
      this.numberOfFinishedQuizzes = d.examFinished;
    });
  }
}
