import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { MaterialModule } from './material.module';
import { CreateTrainingComponent } from './training/create-training/create-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { PreviousTrainingComponent } from './training/previous-training/previous-training.component';
import { TrainingComponent } from './training/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    CreateTrainingComponent,
    PreviousTrainingComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
