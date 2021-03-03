import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AdminDashboardService } from '../../services/admin-dashboard.service';
@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css'],
})
export class CreatejobComponent implements OnInit {
  constructor(private dashboardService: AdminDashboardService) {}

  // @Input() createJobVal: string;
  @Output() createdJobs = new EventEmitter<{}>();

  // fields = [];

  getJobs = [];

  jobForm = new FormGroup({
    jobTitle: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    closingDate: new FormControl('', Validators.required),
    summary: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
  });

  get jobTitle(): any {
    return this.jobForm.get('jobTitle');
  }
  get location(): any {
    return this.jobForm.get('location');
  }
  get closingDate(): any {
    return this.jobForm.get('closingDate');
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnInit(): void {}

  onsubmit() {
    if (this.jobForm.valid) {
      this.createdJobs.emit(this.jobForm.value);
      alert('Form successfully Submitted');
      this.jobForm.reset();
    } else {
      this.validateAllFormFields(this.jobForm);
    }
  }
}
