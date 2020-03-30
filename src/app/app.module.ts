import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { TestCounterComponent } from "./test-counter/test-counter.component";

@NgModule({
	declarations: [
    AppComponent,
    CounterComponent,
    TestCounterComponent
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
