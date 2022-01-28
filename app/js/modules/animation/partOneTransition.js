import Highway from '@dogstudio/highway';
import { gsap,timeline } from 'gsap';

class PartOneTransition extends Highway.Transition{
    in({from, to, done}){
        //tan pronto clicko en el CTA
        gsap.to(document.querySelector('.b--cta-a'), {height: "1300px", transformOrigin: "bottom", duration: 4, ease: "power4.out"});
        gsap.to(document.querySelector('.b--cta-a__content'), {opacity: 0, duration: 2, ease: "power2.out",
        onComplete: () => {
            window.scrollTo(0, 0);
            from.remove();
            done();
            gsap.set(document.querySelector('.b--hero-b'), {scaleY: 1.2, transformOrigin: "center", duration: 4, ease: "power4.out"});
        }
      });
    }

    out({from, done}){
        done();
    }
}

export default PartOneTransition; 