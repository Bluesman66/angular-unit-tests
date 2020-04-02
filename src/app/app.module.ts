import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TestCounterComponent } from './test-counter/test-counter.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
	declarations: [
    AppComponent,
    CounterComponent,
    TestCounterComponent,
    RoutingComponent,
    RouterOutlet,
    NavbarComponent,
    ColorDirective
  ],
	imports: [
    BrowserModule,
    FormsModule
  ],
	providers: [],
	bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
