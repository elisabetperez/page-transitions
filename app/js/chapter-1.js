import './../scss/entries/chapter-1.scss';
import Navbar from './modules/navbar/navbar';
import Blazy from 'blazy'; //inits the lazy loading for images
import 'lottie-web';

class Chapter1 { 
    constructor(){
        new Blazy({ 
          selector: ".b--lazy-a"
        }); 
        new Navbar();
    }

}
export default Chapter1;

var chapter1JS = new Chapter1();
