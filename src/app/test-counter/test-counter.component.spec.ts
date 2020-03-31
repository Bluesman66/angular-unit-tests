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
});
