import Highway from '@dogstudio/highway';
import { gsap,timeline } from 'gsap';

class PartTwoTransition extends Highway.Transition{
    in({from, to, done}){
        gsap.set(document.querySelector(".b--hero-a"), {opacity: 0});
        gsap.set(document.querySelector('.loader.two'), {opacity: 1});

        gsap.to(document.querySelector(".b--hero-a"), {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                from.remove();
                done();
                window.scrollTo(0, 0);
                setTimeout(() => {
                    gsap.to(document.querySelector('.loader.two'), {duration: 1, opacity: 0});
                }, 1000);
            }
        });
    }

    out({from, done}){
        window.scrollTo(0, 0);
        gsap.to(document.querySelector('.loader.two'), {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                setTimeout(() => {
                    done();
                }, 1000);
            }
        });
    }
}

export default PartTwoTransition; 