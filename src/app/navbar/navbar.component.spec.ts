import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterLinkWithHref } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NavbarComponent],
			imports: [RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should have a link to a post page", () => {
		let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
		let index = debugElements.findIndex(e => e.attributes["routerLink"] === "/posts");

		expect(index).toBeGreaterThan(-1);
	});
});
