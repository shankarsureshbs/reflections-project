import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatejobComponent } from './dashboard/createjob/createjob.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JoblistComponent } from './dashboard/joblist/joblist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreatejobComponent,
    ApplyjobComponent,
    LoginComponent,
    SignupComponent,
    JoblistComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
