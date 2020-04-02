import { EMPTY, of, throwError } from "rxjs";

import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";

import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";

describe("PostsComponent: unit tests", () => {
	let component: PostsComponent;
	let service: PostsService;

	beforeEach(() => {
		service = new PostsService(null);
		component = new PostsComponent(service);
	});

	xit("should call the fetch inside ngOnInit", () => {
		const spy = spyOn(service, "fetch").and.callFake(() => {
			return EMPTY;
		});

		component.ngOnInit();

		expect(spy).toHaveBeenCalled();
	});

	xit("should update posts length after ngOnInit", () => {
		const posts = [1, 2, 3, 4];
		spyOn(service, "fetch").and.returnValue(of(posts));

		component.ngOnInit();

		expect(component.posts.length).toBe(posts.length);
	});

	it("should add the new post", () => {
		const post = { title: "test" };
		const spy = spyOn(service, "create").and.returnValue(of(post));

		component.add(post.title);

		expect(spy).toHaveBeenCalled();
		expect(component.posts.includes(post)).toBeTruthy();
	});

	it("should set message error", () => {
		const error = "Error message";
		const spy = spyOn(service, "create").and.returnValue(throwError(error));

		component.add("Post title");

		expect(spy).toHaveBeenCalled();
		expect(component.message).toBe(error);
	});

	it("should remove post if user confirmed", () => {
		const spy = spyOn(service, "remove").and.returnValue(EMPTY);
		spyOn(window, "confirm").and.returnValue(true);

		component.delete(10);

		expect(spy).toHaveBeenCalledWith(10);
	});

	it("should NOT remove post if user NOT confirmed", () => {
		const spy = spyOn(service, "remove").and.returnValue(EMPTY);
		spyOn(window, "confirm").and.returnValue(false);

		component.delete(10);

		expect(spy).not.toHaveBeenCalledWith(10);
	});
});

describe("PostComponent: integration tests", () => {
	let fixture: ComponentFixture<PostsComponent>;
	let component: PostsComponent;
	let service: PostsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [PostsComponent],
			providers: [PostsService],
			imports: [HttpClientModule]
		});

		fixture = TestBed.createComponent(PostsComponent);
		component = fixture.componentInstance;
		service = TestBed.get(PostsService);
	});

	xit("should fetch posts on ngOnInit", () => {
		const posts = [1, 2, 3];
		spyOn(service, "fetch").and.returnValue(of(posts));

		fixture.detectChanges();

		expect(component.posts).toEqual(posts);
	});

	it("should fetch posts on ngOnInit (promise)", async(() => {
		const posts = [1, 2, 3];
		spyOn(service, "fetchPromise").and.returnValue(Promise.resolve(posts));

		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(component.posts.length).toBe(posts.length);
		});
	}));

	it("should fetch posts on ngOnInit (promise) ver.2", fakeAsync(() => {
		const posts = [1, 2, 3];
		spyOn(service, "fetchPromise").and.returnValue(Promise.resolve(posts));

		fixture.detectChanges();

		tick();

		expect(component.posts.length).toBe(posts.length);
	}));
});
