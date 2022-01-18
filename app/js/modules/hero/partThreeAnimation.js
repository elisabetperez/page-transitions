import { gsap,timeline } from 'gsap';
import { DrawSVGPlugin } from "../../gsap_extension/DrawSVGPlugin";;
gsap.registerPlugin(DrawSVGPlugin);


class PartThreeAnimation{
    constructor(){
        this.init();
        this.easing = "power2.out";
    } 
    init(){
        this.tweenRotation();

        // related to group(red-lines-01)
        this.tweenLines01()

        // related to group(red-lines-02)
        this.tweenLines02()

         // related to group(red-lines-03)
        this.tweenLines03()

        this.tweenMarker()

        this.tweenSeagullsRed()

        this.tweenSeagullsRedSwing()

        this.tweenSeagullsBlackSwing()

        this.tweenSeagullsBlack()

        this.tweenMoveCheck()

    }
    getRandom(min, max){
        return Math.random() * (max - min) + min;
    }
    tweenRotation(){
        document.querySelectorAll('.tweenRotate').forEach(element =>{
            var tlRotation = gsap.timeline({repeat:-1});
            tlRotation.to(document.querySelectorAll('.tweenRotate'),{duration:this.getRandom(.3,18),rotation:"360",transformOrigin:"50% 50%",ease: 'none'})
        });
    }
    tweenLines01(){
        var tlLines = gsap.timeline({repeat:-1,
             yoyo:true,
             delay:2,repeatDelay:2
            });
        tlLines.to(document.getElementById('red-lines01').getElementsByTagName('line'),
            {duration:this.getRandom(.3,1.2),stagger: .2, drawSVG:'100% 100%'});
    }

    tweenLines02(){
        var tlLines = gsap.timeline({repeat:-1,
             yoyo:true,
             delay:this.getRandom(2,3),repeatDelay:2
            });
        tlLines.to(document.getElementById('red-lines02').getElementsByTagName('line'),
            {duration:this.getRandom(.3,1.2),stagger: .2, drawSVG:'100% 100%'});
    }

    tweenLines03(){
        var tlLines = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(.3,1.2),repeatDelay:2});
        tlLines.to(document.getElementById('red-lines03').getElementsByTagName('line'),
            {duration:this.getRandom(.3,1.2),stagger: .2, drawSVG:'100% 100%'});
    }
    tweenMarker(){
        var tlMarker = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(.3,1.2),repeatDelay:.3});
        tlMarker.to(document.getElementById('marker'),{duration:this.getRandom(.6,1.2),y:4,ease: 'none'})
    }

    tweenSeagullsRed(){
        var tlRed = gsap.timeline({
            repeat:-1,
            yoyo: true,
            delay:this.getRandom(2,3),
            repeatDelay:.3
        });
       tlRed.to(document.getElementById('red-seagulls').getElementsByTagName('path'),{
            duration: .3,
            stagger: .1, 
            y: -5,
            ease: this.easing});
    }

    tweenSeagullsBlack(){
        var tlBlack = gsap.timeline({
            repeat:-1,
            yoyo: true,
            delay:this.getRandom(1,2),
            repeatDelay:.5
        });
        tlBlack.to(document.getElementById('blue-seagulls').getElementsByTagName('path'),{
            duration: this.getRandom(.5, 1),
            stagger: .5, 
            y: 4,
            ease: this.easing});
    }

    tweenSeagullsBlackSwing(){
        var tlSwingLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlSwingLeft.to(document.getElementById('blue-seagulls').getElementsByTagName('path'),{duration:.3,rotation: -5,transformOrigin: "top center", ease: "circ.inOut"})
        tlSwingLeft.to(document.getElementById('blue-seagulls').getElementsByTagName('path'),{duration:.3,rotation: 5,transformOrigin: "top center", ease: "circ.inOut"})
    }

    tweenSeagullsRedSwing(){
        var tlSwingLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlSwingLeft.to(document.getElementById('red-seagulls').getElementsByTagName('path'),{duration:.3,rotation: -10,transformOrigin: "top center", ease: "circ.inOut"})
        tlSwingLeft.to(document.getElementById('red-seagulls').getElementsByTagName('path'),{duration:.3,rotation: 10,transformOrigin: "top center", ease: "circ.inOut"})
    }

    tweenMoveCheck(){
        var tlcheck = gsap.timeline({repeat:-1,yoyo:true,RepeatDelay:this.getRandom(.6,1.2),delay:this.getRandom(.6,1.2)})
        tlcheck.staggerFromTo(document.getElementById('checkmark-group'), 2, { y: 30}, { y: 0})
    }
    
    
}


export default PartThreeAnimation;