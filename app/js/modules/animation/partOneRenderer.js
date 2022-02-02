import Highway from "@dogstudio/highway";
import Swiper from "./../../../../node_modules/swiper/swiper-bundle.js";

class PartOneRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter One");
		console.log(this.wrap);
		
	}

	onEnterCompleted() {
		console.log("onEnterCompleted One");
		this.observeDiv();
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

	observeDiv(){
        if (document.querySelectorAll('.js--observe').length > 0) {
            function displayEntry(entry) {
              if (entry.isIntersecting && firstTimeDiv) {
                let ObserveDiv;
                Array.prototype.forEach.call(document.querySelectorAll('.js--observe'), (el) => {
                    if (typeof ObserveDiv == "undefined") {
                        import(/* webpackChunkName: "ObserveDivDYN" */ './../dyn.js').then(x => {
                        setTimeout(() => new x.default(), 20)
                        }).catch(() => console.log("There was a problem."))
                    } else {
                        ObserveDiv;
                    }
                });
                firstTimeDiv = false;
              } 
            }
          
            var firstTimeDiv = true;
            let callback = function (entries, observer) {
              entries.forEach(entry => {
                displayEntry(entry);  
              });
            };
          
            let observer = new IntersectionObserver(callback);
            let target = document.querySelector(".js--observe");
            observer.observe(target);
        }
    }  
}

export default PartOneRenderer;