import { Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { SignupComponent } from './pages/components/signup/signup.component';
import { HomeComponent } from './pages/components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { QuizComponent } from './pages/components/quiz/quiz.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { ProfileComponent } from './shared/reusable/profile/profile.component';
import { DashbComponent } from './shared/reusable/dashb/dashb.component';
import { QuizuploadComponent } from './shared/reusable/quizupload/quizupload.component';
import { QuizformComponent } from './shared/reusable/quizform/quizform.component';
import { QuizListComponent } from './shared/reusable/quiz-list/quiz-list.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate: [authGuard], 
       
    },
    {
        path:'quiz',
        component:QuizComponent,
        canActivate: [authGuard], 
       
    },
    {
        path:'about',
        component:AboutComponent,
        canActivate: [authGuard], 
       
    },
    {
        path:'contact',
        component:ContactComponent,
        canActivate: [authGuard], 
       
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard], 
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' }, 
          { path: 'profile', component: ProfileComponent },
          { path: 'stats', component: DashbComponent },
          {
            path: 'quizupload', 
            component: QuizuploadComponent, 
            children: [
                { path: '', component: QuizListComponent }, // Default to show the quiz list
                { path: 'uploadquizform', component: QuizformComponent } // Show the form when Add Quiz is clicked
            ]
        }
        ],
      },
      { 
        path: '**', 
        redirectTo: 'login' 
    }
];
