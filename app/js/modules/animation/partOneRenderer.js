import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";

class PartOneRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter One");
		console.log(this.wrap);
		
	}

	onEnterCompleted() {
    console.log("onEnterCompleted One");
    
    
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
		console.log("onLeave One");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted One");
	}
 
}

export default PartOneRenderer;