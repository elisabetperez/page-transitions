import Highway from "@dogstudio/highway";
import { tns } from "./../../../../node_modules/tiny-slider/src/tiny-slider";

import 'lottie-web';

class IndexRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Home");
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Home");
		this.slider = tns({
			container: '.js--slider-home',
			items: 1,
			slideBy: 'page',
			autoplay: true
		  });
	}

	onLeave() {
		console.log("onLeave Home");
		this.slider.destroy();
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Home");
	}
}

export default IndexRenderer;