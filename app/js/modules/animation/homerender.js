import Highway from "@dogstudio/highway";

class HomeRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter");
		alert('entro')
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

export default HomeRenderer;