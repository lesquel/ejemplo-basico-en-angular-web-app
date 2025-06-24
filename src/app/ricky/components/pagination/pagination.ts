import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RickyClientData } from '../../services/ricky-client-data';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination {
  private rickyClientData = inject(RickyClientData);
  
  onNextPage() {
    this.rickyClientData.addPage();
  }

  onPrevPage() {
    this.rickyClientData.subtractPage();
  }
}
