import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss']
})
export class ContractCardComponent {
  @Input() item: any;
}
