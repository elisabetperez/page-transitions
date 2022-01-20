import Highway from "@dogstudio/highway";

/*
    View Events for Highway
	- About Page
    - Events are listed in their execution order
-------------------------------------------------- */
class AboutRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter");
	}

	onEnterCompleted() {
		console.log("onEnterCompleted");
	}

	onLeave() {
		console.log("onLeave");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted");
	}
}

export default AboutRenderer;