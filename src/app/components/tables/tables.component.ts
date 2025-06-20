import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() data: any = { data: [], page: 1, pageSize: 10, total_pages: 1 };

  constructor() {}

  ngOnInit(): void {}

  

  parseDate(date: string): string {
    if (!date) return 'NA';
    return moment(date).format('MM/DD/YYYY HH:mm');
  }
  
}
