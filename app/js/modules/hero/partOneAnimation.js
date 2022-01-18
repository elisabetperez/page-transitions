import { gsap,timeline } from 'gsap';
import { DrawSVGPlugin } from "../../gsap_extension/DrawSVGPlugin";;
gsap.registerPlugin(DrawSVGPlugin);


class PartOneAnimation{
    constructor(){
        this.init();
        this.easing = "power2.out";
    }
    init(){
        this.tweenRotation();

        this.tweenSwingLeft()

        this.tweenSwingRight()
    }
    getRandom(min, max){
        return Math.random() * (max - min) + min;
    }
    tweenRotation(){
        document.querySelectorAll('.tweenRotate').forEach(element =>{
            var tlRotation = gsap.timeline({repeat:-1});
            tlRotation.to(document.querySelectorAll('.tweenRotate'),{duration:this.getRandom(3,6),rotation:"360",transformOrigin:"50% 50%",ease: 'none'})
        });
    }
    tweenSwingLeft(){
        var tlSwingLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlSwingLeft.to(document.getElementById('weigh-left'),{duration:2,rotation: -12,transformOrigin: "top center", ease: "circ.inOut"})
    }
    tweenSwingRight(){
        var tlSwingLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlSwingLeft.to(document.getElementById('weigh-right'),{duration:2,rotation: -12,transformOrigin: "top center", ease: "circ.inOut"})
    }
    
}


export default PartOneAnimation;