import './../scss/entries/chapter-2.scss';
import Navbar from './modules/navbar/navbar';
import Blazy from 'blazy'; //inits the lazy loading for images

class Chapter2 { 
    constructor(){
        new Blazy({ 
          selector: ".b--lazy-a"
        }); 
        new Navbar();
    }

}
export default Chapter2;
var chapter2JS = new Chapter2();