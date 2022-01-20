// CSS
import './../scss/entries/home.scss';
import Animation from './modules/animation/animation.js';

import Blazy from 'blazy'; //inits the lazy loading for images

import 'lottie-web';

class Home { 
    constructor(){
        console.log('home JS!');
        new Blazy({ 
          selector: ".b--lazy-a"
        }); 
        new Animation();
    }
}
export default Home;
var home = new Home();
