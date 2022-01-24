import Highway from "@dogstudio/highway";

class IndexRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Home");
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Home");
	}

	onLeave() {
		console.log("onLeave Home");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Home");
	}
}

export default IndexRenderer;