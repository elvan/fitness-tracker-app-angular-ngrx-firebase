import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CreateTrainingComponent } from './training/create-training/create-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PreviousTrainingComponent } from './training/previous-training/previous-training.component';
import { TrainingComponent } from './training/training/training.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'current-training',
    component: CurrentTrainingComponent,
  },
  {
    path: 'create-training',
    component: CreateTrainingComponent,
  },
  {
    path: 'previous-training',
    component: PreviousTrainingComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
