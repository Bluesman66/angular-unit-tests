import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-test-counter",
	templateUrl: "./test-counter.component.html"
})
export class TestCounterComponent implements OnInit {
	counter = 0;

	constructor() {}

	increment() {
		this.counter++;
	}

	decrement() {
		this.counter--;
	}

	ngOnInit() {}
}
