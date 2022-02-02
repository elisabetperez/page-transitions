import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";
import postscribe from 'postscribe';

class PartTwoRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Two");
		console.log(this.wrap);
		
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Two");

    const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
		  
			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
		  
      });
      
      postscribe('#mydiv', '<h1>Hello PostScribe</h1>');
	}

	onLeave() {
		console.log("onLeave Two");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Two");
	}

}

export default PartTwoRenderer;