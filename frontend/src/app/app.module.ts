import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExerciseTrackerComponent } from './components/exercise-tracker/exercise-tracker.component';
import { MealTrackerComponent } from './components/meal-tracker/meal-tracker.component';
import { SleepTrackerComponent } from './components/sleep-tracker/sleep-tracker.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SummaryChartComponent } from './components/summary-chart/summary-chart.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ExerciseTrackerComponent,
    MealTrackerComponent,
    SleepTrackerComponent,
    UserProfileComponent,
    SummaryChartComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
