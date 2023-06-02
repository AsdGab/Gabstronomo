import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from 'src/app/models/tableModel';
import { TablesService } from 'src/app/services/tables/tables.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss'],
})
export class TableDialogComponent implements OnInit {
  tables$?: Observable<Table[]>;

  async ngOnInit() {
    this.getTables();
  }

  constructor(private tablesService: TablesService) {}

  getTables(): void {
    this.tables$ = this.tablesService.getAll() as Observable<Table[]>;
  }
}
