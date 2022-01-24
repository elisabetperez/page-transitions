import Highway from "@dogstudio/highway";

class IntroRenderer extends Highway.Renderer {

	onEnter() {
		console.log("onEnter Intro");
	}

	onEnterCompleted() {
		console.log("onEnterCompleted Intro");
		this.observeDiv();
	}

	onLeave() {
		console.log("onLeave Intro");
	}

	onLeaveCompleted() {
		console.log("onLeaveCompleted Intro");
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

export default IntroRenderer;