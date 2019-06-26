import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { IQuiz } from 'src/app/models/quiz.model';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-quizresults',
  templateUrl: './quizresults.component.html',
  styleUrls: ['./quizresults.component.css']
})
export class QuizresultsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'correct', 'incorrect', 'finished','startDate'];
  quizzes: IQuiz[];
  dataSource: MatTableDataSource<IQuiz>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizzes = this.quizService.getAllQuizzes();
    this.dataSource = new MatTableDataSource(Array.from(this.quizzes));
    this.dataSource.sort = this.sort;
  }
}

