import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatejobComponent } from './dashboard/createjob/createjob.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-jobs', component: CreatejobComponent },
  { path: 'apply-jobs', component: ApplyjobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
