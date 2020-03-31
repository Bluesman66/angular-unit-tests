import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { TestCounterComponent } from "./test-counter.component";

describe("TestCounterComponent", () => {
	let component: TestCounterComponent;
	let fixture: ComponentFixture<TestCounterComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [TestCounterComponent]
		});

		fixture = TestBed.createComponent(TestCounterComponent);
		component = fixture.componentInstance;
	});

	it("component should be created", () => {
		expect(component).toBeTruthy();
	});

	it("should render counter property", () => {
		const num = 42;
		component.counter = num;

		fixture.detectChanges();

		let de = fixture.debugElement.query(By.css(".counter"));
		let el: HTMLElement = de.nativeElement;

		expect(el.textContent).toContain(num.toString());
	});

	it("should add a green class if values of counter is even", () => {
		component.counter = 6;

		fixture.detectChanges();

		let de = fixture.debugElement.query(By.css(".counter"));
		let el: HTMLElement = de.nativeElement;

		expect(el.classList.contains("green")).toBeTruthy();
	});

	it("should increment counter when increment button was clicked", () => {
		let btn = fixture.debugElement.query(By.css("#increment"));
		btn.triggerEventHandler("click", null);

		expect(component.counter).toBe(1);
	});
});
