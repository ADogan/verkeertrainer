// Framework modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material.angular
import { MaterialModule } from './material-module';
// import {MatIconModule} from '@angular/material/icon';

// Services
import { TrafficSignsService } from './services/traffic-signs.service';
import { QuizService } from './services/quiz.service';

// Pages
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrafficSignsComponent } from './traffic-signs/traffic-signs.component';

// Main layout modules
import { TopbarComponent } from './main_layout/topbar/topbar.component';
import { FooterComponent } from './main_layout/footer/footer.component';
import { QuizresultsComponent } from './quiz/quizresults/quizresults.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TrafficSignsComponent,
    TopbarComponent,
    FooterComponent,
    QuizComponent,
    QuizresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    // MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [TrafficSignsService,
    QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
