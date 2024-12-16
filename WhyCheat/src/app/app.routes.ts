import { Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { SignupComponent } from './pages/components/signup/signup.component';
import { HomeComponent } from './pages/components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { QuizComponent } from './pages/components/quiz/quiz.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';

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
       
    },
    {
        path:'quiz',
        component:QuizComponent,
       
    },
    {
        path:'about',
        component:AboutComponent,
       
    },
    {
        path:'contact',
        component:ContactComponent
       
    }

];
