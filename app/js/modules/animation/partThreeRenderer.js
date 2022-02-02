import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";
import { gsap,  TimelineMax } from 'gsap';
import scrollTrigger from './../ScrollTrigger.js';
gsap.registerPlugin(scrollTrigger);

class PartThreeRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Three");
		console.log(this.wrap);
		
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Three");

    const swiper = new Swiper('.swiper', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
		  
			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
		  
      });
      
      const text = document.getElementById("text")

      gsap.from(".box-gs", {
        rotate: 360,
        scrollTrigger: {
          onEnter: () => {
            text.innerText = 'onEnter';
          },
          onLeave: () => {
            text.innerText = 'onLeave';
          },
          onEnterBack: () => {
            text.innerText = 'onEnterBack';
          },
          onLeaveBack: () => {
            text.innerText = 'onLeaveBack';
          },
          //onEnter, onLeave, onEnterBack, onLeaveBack
          toggleActions: "play pause none reset",
          markers: true,
          start: 'top center',
          end: 'bottom 60%',
          trigger: ".box-gs",
          scrub: true,
        }
      });

	}

	onLeave() {
		console.log("onLeave Three");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Three");
	}

}

export default PartThreeRenderer;