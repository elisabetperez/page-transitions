import Highway from "@dogstudio/highway";

/*
    View Events for Highway
	- About Page
    - Events are listed in their execution order
-------------------------------------------------- */
class IntroRenderer extends Highway.Renderer {

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

export default IntroRenderer;