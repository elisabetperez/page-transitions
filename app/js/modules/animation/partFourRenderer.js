import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";

class PartFourRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Four");
		console.log(this.wrap);
		
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Four");

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
		console.log("onLeave Four");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Four");
	}
 
}

export default PartFourRenderer;