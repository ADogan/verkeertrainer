// Framework modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// Material.angular
import { MaterialModule } from './material-module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


// Services
import { TrafficSignsService } from './services/traffic-signs.service';

// Pages
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrafficSignsComponent } from './traffic-signs/traffic-signs.component';

// Main layout modules
import { TopbarComponent } from './main_layout/topbar/topbar.component';
import { FooterComponent } from './main_layout/footer/footer.component';
import { LogoutModalComponent } from './main_layout/modals/logout-modal.component';
import { QuizresultsComponent } from './quiz/quizresults/quizresults.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    TrafficSignsComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
    QuizComponent,
    QuizresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  // entryComponents: [ToolbarMultirowExample],
  providers: [TrafficSignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
