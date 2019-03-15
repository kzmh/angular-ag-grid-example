import {Component} from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {Item} from '../item';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss'],
})
export class ItemGridComponent {
  items: Item[] = [];

  columnDefs: any[] = [{
    headerName: 'JANコード',
    field: 'janCd',
    pinned: 'left',
    lockPinned: true,
  }, {
    headerName: '商品名',
    field: 'name',
    editable: true,
  }, {
    headerName: 'メーカー名',
    field: 'makerName',
    editable: true,
  }, {
    headerName: 'ブランド名',
    field: 'brandName',
    editable: true,
  }, {
    headerName: '幅',
    field: 'width',
    editable: true,
  }, {
    headerName: '高さ',
    field: 'height',
    editable: true,
  }, {
    headerName: '奥行き',
    field: 'depth',
    editable: true,
  }];
  private gridApi: GridApi;
  private columnApi: ColumnApi;
  getRowNodeId = (data) => data.janCd; // deltaRowDataModeに必要

  constructor() {
    for (let i = 1; i <= 100; i++) {
      const janCd = (i + 4500000000000).toString();
      this.items.push(new Item(janCd, '商品' + i, 'メーカー' + i, 'ブランド' + i, 100 + i, 200 + i, 300 + i));
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }
}
