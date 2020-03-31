import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TestCounterComponent } from "./test-counter.component";

describe("CounterComponent", () => {
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
		expect(component).toBeDefined();
	});
});
