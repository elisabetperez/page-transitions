import { gsap, TimelineMax } from 'gsap';

class Mask {
    constructor() {
        this.mask = document.querySelector(".b--mask-a");
        this.mask_stripe = document.querySelectorAll(".b--mask-a__item");
    }
    reset(){
        var tl = new TimelineMax({
            onComplete:()=>{
                this.mask.style.pointerEvents = "none";
            }
        })
        tl.set(this.mask_stripe,{x:'-100%'})
    }

    tweenIn() {
        console.log('tweenIn!')
        var tl = new TimelineMax({
            onComplete:()=>{
                this.mask.style.pointerEvents = "all";
            }
         })
        tl.staggerTo(this.mask_stripe,1,{x:'0%',stagger:0.25,ease: "power2.out"})
    }

    tweenOut(){
        console.log('tweenOut!')
        var tl = new TimelineMax({
            onComplete:()=>{
                this.mask.style.pointerEvents = "none";
            }
        })
        tl.staggerTo(this.mask_stripe,1,{x:'-100%',stagger:0.25,ease: "power2.out"})
    }

  
}

export default Mask;