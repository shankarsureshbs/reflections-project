
import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.css'],
})
export class ApplyjobComponent implements OnInit {
  applyform: FormGroup;

  ngOnInit() {
    this.applyform = new FormGroup({
      jobs: new FormControl('', Validators.required),
      names: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }
  onsubmit() {
    console.log(this.applyform);
  }
  onreset() {
    this.applyform.reset();
  }
}
