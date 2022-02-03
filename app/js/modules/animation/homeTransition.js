import Highway from '@dogstudio/highway';
import { gsap,timeline } from 'gsap';


class HomeTransition extends Highway.Transition{
    in({from, to, done}){

        gsap.set(document.querySelector(".b--hero-a"), {opacity: 0});
        gsap.set(document.querySelector('.loader.home'), {opacity: 1});

        gsap.to(document.querySelector(".b--hero-a"), {
            opacity: 1,
            duration: .5,
            ease: "power2.out",
            onComplete: () => {
                from.remove();
                done();
                window.scrollTo(0, 0);
                setTimeout(() => {
                    gsap.to(document.querySelector('.loader.home'), {duration: .5, opacity: 0});
                }, 500);
            }
        });
        
    }

    out({from, done}){
        window.scrollTo(0, 0);
        gsap.to(document.querySelector('.loader.home'), {
            opacity: 1,
            duration: .5,
            ease: "power2.out",
            onComplete: () => {
                setTimeout(() => {
                    done();
                }, 500);
            }
        });
    }
}

export default HomeTransition; 