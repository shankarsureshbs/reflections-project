import { Component, Input, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css'],
})
export class JoblistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  @Input() jobList: {};
  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };
  }
}
