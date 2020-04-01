import { Observable, Subject } from "rxjs";

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { RoutingComponent } from "./routing.component";

class RouterStub {
	navigate(path: any[]) {}
}

class ActivatedRouteStub {
	private subject = new Subject<Params>();

	push(params: Params) {
		this.subject.next(params);
	}

	get params() {
		return this.subject.asObservable();
	}
}

describe("RoutingComponent", () => {
	let component: RoutingComponent;
	let fixture: ComponentFixture<RoutingComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [RoutingComponent],
			providers: [
				{ provide: Router, useClass: RouterStub },
				{ provide: ActivatedRoute, useClass: ActivatedRouteStub }
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

	it("should navigate to page 404 if id equal zero", () => {
		let router = TestBed.get(Router);
		let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
		let spy = spyOn(router, "navigate");

		route.push({id: "0"});

		expect(spy).toHaveBeenCalledWith(["/404"]);
	});
});
