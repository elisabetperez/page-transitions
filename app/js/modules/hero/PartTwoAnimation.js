import { gsap,timeline } from 'gsap';
import { DrawSVGPlugin } from "../../gsap_extension/DrawSVGPlugin";;
gsap.registerPlugin(DrawSVGPlugin);


class PartTwoAnimation{
    constructor(){
        this.init();
        this.easing = "power2.out";
    }
    init(){
        this.tweenRotation();

        this.tweenLines01();

        this.tweenLines02();

        this.tweenLines03();

        this.tweenLines04();

        this.tweenRotationWheel();

        this.tweenRotationSmallWheel();

        this.moveDotsLeft();

        this.moveDotsRight();

        this.tweenWavesRed();

        this.tweenWavesYellow();

        this.tweenFactoryLine();

        this.tweenJumpApple();
    }

    tweenLines01(){
        var tlLines = gsap.timeline({repeat:-1,
            yoyo:true,
            delay:2,
            repeatDelay: this.getRandom(1, 4)
           });
        tlLines.to(document.getElementById('red-lines-01').getElementsByTagName('line'),
           {duration:this.getRandom(.3,1.2),stagger: .2, drawSVG:'100% 100%'});
    }

    tweenLines02(){
        var tlLines = gsap.timeline({repeat:-1,
            yoyo:true,
            delay:1,
            repeatDelay: this.getRandom(1, 4)
           });
           tlLines.staggerFromTo(document.getElementById('red-lines-02').getElementsByTagName('line'), this.getRandom(.3, 1), {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, this.getRandom(.2, .6));
    }

    tweenLines03(){
        var tlLines = gsap.timeline({repeat:-1,
            yoyo:true,
            delay:1,
            repeatDelay: this.getRandom(1, 4)
           });
        tlLines.staggerFromTo(document.getElementById('red-lines-03').getElementsByTagName('line'), this.getRandom(.3, 1), {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, this.getRandom(.2, .6));
    }

    tweenLines04(){
        var tlLines = gsap.timeline({repeat:-1,
            yoyo:true,
            delay:1,
            repeatDelay:1
           });
        tlLines.to(document.getElementById('red-lines-04').getElementsByTagName('line'),
           {duration:this.getRandom(.3, 1.2),stagger: .2, drawSVG:'100% 100%'});
    }

    tweenWavesRed(){
        var tlRedWaves = gsap.timeline({repeat:-1,
            yoyo:true,
            delay:1,
            repeatDelay:1
           });
        tlRedWaves.to(document.getElementById('waves-red').getElementsByTagName('path'),
           {duration: 1,stagger: .2, drawSVG:'100% 100%'});
    }

    tweenWavesYellow(){
        var tlYellowWaves = gsap.timeline({repeat:-1,
            yoyo:true,
            delay:1,
            repeatDelay:1
           });
        tlYellowWaves.to(document.getElementById('waves-yellow').getElementsByTagName('path'),
           {duration: 1,stagger: .2, drawSVG:'100% 100%'});
    }

    tweenRotationWheel(){
        var tlWheel = gsap.timeline({repeat:-1});
        tlWheel.to(document.getElementById('big-wheel'),{duration:this.getRandom(3,6),rotation:"360",transformOrigin:"50% 50%",ease: 'none'})
    }

    tweenRotationSmallWheel(){
        var tlSmall = gsap.timeline({repeat:-1});
        tlSmall.to(document.getElementById('small-wheel'),{duration:this.getRandom(3,6),rotation:"360",transformOrigin:"50% 50%",ease: 'none'})
    }

    tweenRotation(){
        document.querySelectorAll('.tweenRotate').forEach(element =>{
            var tlRotation = gsap.timeline({repeat:-1});
            tlRotation.to(document.querySelectorAll('.tweenRotate'),{duration:this.getRandom(2,6),rotation:"360",transformOrigin:"50% 50%",ease: this.easing})
        });
    }

    moveDotsLeft(){
        var tlBoxLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlBoxLeft.to(document.getElementById('red-dots-left01'), {duration: 2,x:7, ease: this.easing})
        tlBoxLeft.to(document.getElementById('red-dots-left01'), {duration: 2,x:-3, ease: this.easing})
    }

    moveDotsRight(){
        var tlBoxRight = gsap.timeline({repeat:-1,yoyo:true})
        tlBoxRight.to(document.getElementById('red-dots-left02'), {duration: 2,x:7, ease: this.easing})
        tlBoxRight.to(document.getElementById('red-dots-left02'), {duration: 2,x:-3, ease: this.easing})
    }

    getRandom(min, max){
        return Math.random() * (max - min) + min;
    }

    tweenFactoryLine(){
        var tlFactory = gsap.timeline({repeat:-1,yoyo:true})
        tlFactory.to(document.getElementById('factory-line'), {duration: this.getRandom(.5, 2), x: 17, ease:'none'})
    }

    tweenJumpApple(){
        var tlApple = gsap.timeline({repeat:-1,yoyo:true})
        tlApple.to(document.getElementById('apple'), {duration: this.getRandom(.2, .9), y: -2, ease: this.easing})
    }
    
}


export default PartTwoAnimation;