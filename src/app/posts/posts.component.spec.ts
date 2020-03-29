import { PostsService } from "./posts.service";
import { PostsComponent } from "./posts.component";
import { EMPTY, of, throwError } from "rxjs";

describe("PostComponent", () => {
	let component: PostsComponent;
	let service: PostsService;

	beforeEach(() => {
		service = new PostsService(null);
		component = new PostsComponent(service);
	});

	it("should call the fetch inside ngOnInit", () => {
		const spy = spyOn(service, "fetch").and.callFake(() => {
			return EMPTY;
		});

		component.ngOnInit();

		expect(spy).toHaveBeenCalled();
	});

	it("should update posts length after ngOnInit", () => {
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
});
