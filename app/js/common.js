import './../scss/entries/common.scss';
import Animation from './modules/animation/animation';
import Blazy from 'blazy'; //inits the lazy loading for images
import 'lottie-web';

class Common { 
    constructor(){
        new Animation();
        new Blazy({ 
			selector: ".b--lazy-a"
		}); 
        this.init();
    }

    init(){
        console.log('common!!');
    }

  
}
export default Common;
new Common();
