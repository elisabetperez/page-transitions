import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";
import { gsap,  TimelineMax } from 'gsap';

class PartFiveRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Five");
		console.log(this.wrap);
		
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Five");
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
		  
			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
		  
      });
      

      // Declaring the variables
      var up = document.getElementById("UpBox");
      var right = document.getElementById("RightBox");
      var down = document.getElementById("DownBox");
      var left = document.getElementById("LeftBox");
      var boxes = document.getElementsByClassName("box");
      var tl = new TimelineMax();

      // Creating the timeline and making it repeat itself infinitely
      tl
        .to(up, .5, {css:{fill:"#0F1411"}})
        .to(right, .5, {css:{fill:"#0F1411"}})
        .to(down, .5, {css:{fill:"#0F1411"}})
        .to(left, .5, {css:{fill:"#0F1411"}})
        .to(boxes, .5, {rotation: 45, transformOrigin:"center center"});

      tl.repeat(-1);

	}

	onLeave() {
		console.log("onLeave Five");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Five");
	}
 
}

export default PartFiveRenderer;