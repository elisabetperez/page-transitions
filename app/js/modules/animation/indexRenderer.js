import Highway from "@dogstudio/highway";

class IndexRenderer extends Highway.Renderer {

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

export default IndexRenderer;