import Highway from '@dogstudio/highway';
import { gsap } from 'gsap';

class Fade extends Highway.Transition{
    in({from, to, done}){
        gsap.fromTo(to, {left: '-100%', top: '50%'}, {left: '0%', onComplete: () => { 
            from.remove();
        }})
    }

    out({from, done}){
        done();
    }
}

export default Fade; 