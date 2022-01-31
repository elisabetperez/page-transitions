import Highway from '@dogstudio/highway';
import { gsap,timeline } from 'gsap';

const loader = document.querySelector('.loader');

class HomeTransition extends Highway.Transition{
    in({from, to, done}){
        from.remove();
        done();
        window.scrollTo(0, 0);
      
    }

    out({from, done}){
            gsap.to(from, {
                opacity: 0,
                duration: 2.5,
                ease: "power2.out",
                onComplete: () => {
                    setTimeout(() => {
                        done();
                    }, 2500);
                }
              });
    }
}

export default HomeTransition; 