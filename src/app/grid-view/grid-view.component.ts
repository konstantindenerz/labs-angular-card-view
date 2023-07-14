import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {HeaderDirective} from '../header.directive';
import {ItemDirective} from '../item.directive';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent {
  @Input() items: any[] = [];
  @ContentChild(HeaderDirective, {read: TemplateRef, static: false}) headerTemplate?: TemplateRef<any>;
  @ContentChild(ItemDirective, {read: TemplateRef, static: false}) itemTemplate?: TemplateRef<any>;
}
