import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizresultsComponent } from './quiz/quizresults/quizresults.component';
import { TrafficSignsComponent } from './traffic-signs/traffic-signs.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    { path: 'traffic_signs/overview', component: TrafficSignsComponent },
    { path: 'traffic_signs/quiz/new', component: QuizComponent },
    { path: 'traffic_signs/quiz/results', component: QuizresultsComponent },

    { path: '', redirectTo: 'traffic_signs/quiz/new', pathMatch: 'full' }
];



export const AppRoutingModule = RouterModule.forRoot(routes);
