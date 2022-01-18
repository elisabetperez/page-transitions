import {tns} from 'tiny-slider/src/tiny-slider';

class SliderPrimaryIE{
    constructor(){
      this.init();
    }

    init(){
      this.createSlider();
    }
  
    /* 
    Creates slider in a responsive way
    */
    createSlider() { 
      this.slider = tns({
          lazyload: true,
          lazyloadSelector: '.lazy-tiny',
          infinte:true,
          container: '.js--slider-intro',
          items: 1,
          mouseDrag: true,
          center: true,
          loop: false,
          controls:true,
          controlsContainer: '.b--controls-a',
          responsive: {
            1200: {
              items: 4
            },
            768: {
              items: 2
            },
          }
      });
    }
  
}
export default SliderPrimaryIE;
  