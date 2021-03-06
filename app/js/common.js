import './../scss/entries/common.scss';
import Highway from '@dogstudio/highway';
import HomeTransition from './modules/animation/homeTransition.js';
import IntroTransition from './modules/animation/introTransition.js';
import PartOneTransition from './modules/animation/partOneTransition.js';
import PartTwoTransition from './modules/animation/partTwoTransition.js';
import IndexRenderer from './modules/animation/indexRenderer.js';
import IntroRenderer from './modules/animation/introRenderer.js';
import PartOneRenderer from './modules/animation/partOneRenderer.js';
import PartTwoRenderer from './modules/animation/partTwoRenderer.js';
import PartThreeRenderer from './modules/animation/partThreeRenderer';
import PartThreeTransition from './modules/animation/partThreeTransition';
import PartFourRenderer from './modules/animation/partFourRenderer';
import PartFourTransition from './modules/animation/partFourTransition';
import PartFiveRenderer from './modules/animation/partFiveRenderer';
import PartFiveTransition from './modules/animation/partFiveTransition';

class Common { 
    constructor(){ 
        const H = new Highway.Core({
            renderers: {
                index: IndexRenderer,
                intro: IntroRenderer,
                one: PartOneRenderer,
                two: PartTwoRenderer,
                three: PartThreeRenderer,
                four: PartFourRenderer,
                five: PartFiveRenderer,
            },
            transitions: {
                index: HomeTransition,
                intro: IntroTransition,
                one: PartOneTransition,
                two: PartTwoTransition,
                three: PartThreeTransition,
                four: PartFourTransition,
                five: PartFiveTransition,
            }
        });
        H.on('NAVIGATE_END', ({ to, from, trigger, location }) => {
          setTimeout(() => {
            this.manageStyles(to);
          // this.manageScripts(to);
          }, 1000);

          if (location.anchor) {
            const el = document.querySelector(location.anchor);
            if (el) {
              window.scrollTo(el.offsetLeft, el.offsetTop);
            }
          }
        });
    }

    manageStyles(to) {
        // Your main css file, used to prepend other styles
        const main = document.querySelector('#commonSt');
        const a = [...to.page.querySelectorAll('style:not([data-no-reload]), link:not([data-no-reload])')];
        const b = [...document.querySelectorAll('style:not([data-no-reload]), link:not([data-no-reload])')];
        // Compare Styles
        for (let i = 0; i < b.length; i++) {
          const c = b[i];
          for (let j = 0; j < a.length; j++) {
            const d = a[j];
            if (c.outerHTML === d.outerHTML) {
              // Create Shadow Style
              const style = document.createElement(c.tagName);
              // Loop Over Attributes
              for (let k = 0; k < c.attributes.length; k++) {
                // Get Attribute
                const attr = c.attributes[k];
                // Set Attribute
                style.setAttribute(attr.nodeName, attr.nodeValue);
              }
              // Style Tag
              if (c.tagName === 'STYLE') {
                if (c.innerHTML) {
                  style.innerHTML = c.innerHTML;
                }
              }
              // Replace
              c.parentNode.replaceChild(style, c);
              // Clean Arrays
              b.splice(i, 1);
              a.splice(j, 1);
              // Exit Loop
              break;
            }
          }
        }
        // Remove Useless
        for (const style of b) {
          // Remove
          style.parentNode.removeChild(style);
        }
        // Add Styles
        for (const style of a) {
          const loc = style.parentNode.tagName;
          if (loc === 'HEAD') {
            document.head.insertBefore(style, main);
          }
          if (loc === 'BODY') {
            document.body.appendChild(style);
          }
        }
    }

    manageScripts(to) {
      // Your main JS file, used to prepend other scripts
      const main = document.querySelector('#main-script');
      const a = [...to.page.querySelectorAll('script:not([data-no-reload])')];
      const b = [...document.querySelectorAll('script:not([data-no-reload])')];
      // Compare Scripts
      for (let i = 0; i < b.length; i++) {
        const c = b[i];
        for (let j = 0; j < a.length; j++) {
          const d = a[j];
          if (c.outerHTML === d.outerHTML) {
            // Create Shadow Script
            const script = document.createElement(c.tagName);
            // Loop Over Attributes
            for (let k = 0; k < c.attributes.length; k++) {
              // Get Attribute
              const attr = c.attributes[k];
              // Set Attribute
              script.setAttribute(attr.nodeName, attr.nodeValue);
            }
            // Inline Script
            if (c.innerHTML) {
              script.innerHTML = c.innerHTML;
            }
            // Replace
            c.parentNode.replaceChild(script, c);
            // Clean Arrays
            b.splice(i, 1);
            a.splice(j, 1);
            // Exit Loop
            break;
          }
        }
      }
      // Remove Useless
      for (const script of b) {
        // Remove
        script.parentNode.removeChild(script);
      }
      // Add Scripts
      for (const script of a) {
        const loc = script.parentNode.tagName;
        if (loc === 'HEAD') {
          document.head.appendChild(script);
        }
        if (loc === 'BODY') {
          document.body.insertBefore(script, main);
        }
      }
    }

  
}
export default Common;
new Common();
