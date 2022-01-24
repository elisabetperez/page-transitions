import Highway from "@dogstudio/highway";

class IntroRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Intro");
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Intro");
	}

	onLeave() {
		console.log("onLeave Intro");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Intro");
	}
}

export default IntroRenderer;