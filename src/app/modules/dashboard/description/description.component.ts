import { Component, Input } from '@angular/core';
import { I_StockData } from '../../../shared/utils/dashboard.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
@Input() descriptionDetails!: I_StockData;
}
