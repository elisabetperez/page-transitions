import './../scss/entries/overview.scss';

import Blazy from 'blazy'; //inits the lazy loading for images
import Animation from './modules/animation/animation.js';

import 'lottie-web';

class Overview { 
    constructor(){
        console.log('intro JS!');
        new Blazy({ 
          selector: ".b--lazy-a"
        }); 
        new Animation();

    }
}
export default Overview;
new Overview();
