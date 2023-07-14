import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardDirective} from './card.directive';
import {GridViewComponent} from './grid-view/grid-view.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ContractCardComponent } from './contract-card/contract-card.component';
import { ItemDirective } from './item.directive';
import { HeaderDirective } from './header.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    CardDirective,
    UserCardComponent,
    ContractCardComponent,
    ItemDirective,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
