import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
