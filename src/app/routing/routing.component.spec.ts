import { Observable } from "rxjs";

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";

import { RoutingComponent } from "./routing.component";

class RouterStub {
	navigate(path: any[]) {}
}

describe("RoutingComponent", () => {
	let component: RoutingComponent;
	let fixture: ComponentFixture<RoutingComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RoutingComponent],
			providers: [
				{ provide: Router, useClass: RouterStub },
				{
					provide: ActivatedRoute,
					useValue: {
						params: new Observable<any>()
					}
				}
			]
		});

		fixture = TestBed.createComponent(RoutingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeDefined();
	});

	it("should navigate to posts if go back", () => {
		let router = TestBed.get(Router);
		let spy = spyOn(router, "navigate");

    component.goBack();

		expect(spy).toHaveBeenCalledWith(["/posts"]);
	});
});
