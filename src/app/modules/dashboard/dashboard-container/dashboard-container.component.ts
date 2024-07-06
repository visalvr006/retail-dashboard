import { Component } from '@angular/core';
import { STOCK_LIST } from '../../../shared/utils/util';
import { I_StockData } from '../../../shared/utils/dashboard.interface';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.css'
})
export class DashboardContainerComponent {
  sidebarVisible: boolean = false;
  stockList: I_StockData[] = STOCK_LIST;
}
