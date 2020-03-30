import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-counter",
	template: ` Counter: {{ counter }} `
})
export class CounterComponent {
	counter = 0;
	public form: FormGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			login: ["", Validators.required],
			email: [""]
		});
	}

	@Output() counterEmitter = new EventEmitter<number>();

	increment() {
		this.counter++;
		this.counterEmitter.emit(this.counter);
	}

	decrement() {
		this.counter--;
	}
}
