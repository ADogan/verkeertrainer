import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrafficSignsComponent } from './traffic-signs/traffic-signs.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'trafficSigns', component: TrafficSignsComponent },

    { path: '**', redirectTo: '' }
];



export const AppRoutingModule = RouterModule.forRoot(routes);
