import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientTasksComponent } from './patient-tasks/patient-tasks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SideTaskPanelComponent } from './side-task-panel/side-task-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientTasksComponent,
    NavbarComponent,
    SideTaskPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
