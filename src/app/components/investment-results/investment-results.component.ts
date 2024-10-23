import { Component, computed } from '@angular/core';

import { InvestmentService } from '../../services/investment.service';


@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = computed(() => this.investmentService.resultData());

  constructor( private investmentService: InvestmentService) {
  }


}
