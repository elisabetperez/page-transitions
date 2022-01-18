import './../scss/entries/overview.scss';

import Highway from '@dogstudio/highway';
import Fade from './transition.js';

import Navbar from './modules/navbar/navbar';
import Blazy from 'blazy'; //inits the lazy loading for images

import 'lottie-web';

class Overview { 
    constructor(){
        new Blazy({ 
          selector: ".b--lazy-a"
        }); 
        new Navbar();
        const H = new Highway.Core({
            transitions: {
                default: Fade,
              }
        });
        H.on('NAVIGATE_END', ({ to, from, trigger, location }) => {
            this.manageStyles(to);
        });
    }

    manageStyles(to) {
        // Your main css file, used to prepend other styles
        const main = document.querySelector('#introStyle');
      ​
        const a = [...to.page.querySelectorAll('style:not([data-no-reload]), link:not([data-no-reload])')];
        const b = [...document.querySelectorAll('style:not([data-no-reload]), link:not([data-no-reload])')];
      ​
        // Compare Styles
        for (let i = 0; i < b.length; i++) {
          const c = b[i];
      ​
          for (let j = 0; j < a.length; j++) {
            const d = a[j];
      ​
            if (c.outerHTML === d.outerHTML) {
              // Create Shadow Style
              const style = document.createElement(c.tagName);
      ​
              // Loop Over Attributes
              for (let k = 0; k < c.attributes.length; k++) {
                // Get Attribute
                const attr = c.attributes[k];
      ​
                // Set Attribute
                style.setAttribute(attr.nodeName, attr.nodeValue);
              }
      ​
              // Style Tag
              if (c.tagName === 'STYLE') {
                if (c.innerHTML) {
                  style.innerHTML = c.innerHTML;
                }
              }
      ​
              // Replace
              c.parentNode.replaceChild(style, c);
      ​
              // Clean Arrays
              b.splice(i, 1);
              a.splice(j, 1);
      ​
              // Exit Loop
              break;
            }
          }
        }
      ​
        // Remove Useless
        for (const style of b) {
          // Remove
          style.parentNode.removeChild(style);
        }
      ​
        // Add Styles
        for (const style of a) {
          const loc = style.parentNode.tagName;
      ​
          if (loc === 'HEAD') {
            document.head.insertBefore(style, main);
          }
      ​
          if (loc === 'BODY') {
            document.body.appendChild(style);
          }
        }
      }

}
export default Overview;
new Overview();
