import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";


import 'lottie-web';

class IndexRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Home");
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Home");
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
		  
			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
		  
		  });
	}

	onLeave() {
		console.log("onLeave Home");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Home");
	}
}

export default IndexRenderer;
//new IndexRenderer();