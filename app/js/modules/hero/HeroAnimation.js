import { gsap,timeline } from 'gsap';
import { DrawSVGPlugin } from "../../gsap_extension/DrawSVGPlugin";;
gsap.registerPlugin(DrawSVGPlugin);


class HeroAnimation{
    constructor(){
        this.easing = "power2.inOut";
        this.init();
    }
    
    getRandom(min, max){
        return Math.random() * (max - min) + min;
    }
    init(){ 
        // Rotates 360 degrees elements.
        // used for sun / and gears.
        this.tweenRotation();

        //world plant fade in
        this.fadeUPFlowerWorld()

        this.fadeInFlower()

        this.tweenSwingLeft()

        this.tweenSwingRight()

        this.tweenLines_1();

        this.tweenLines_2();

        this.tweenLines_3();

        this.tweenMoveRedDots();

        this.tweenSeagullsRed()

        this.tweenSeagullsRedSwing()

        this.tweenSeagullsBlackSwing()

        this.tweenSeagullsBlack()

        this.tweenJump();

        this.tweenFactoryLine();

        this.tweenMoveCheck();

        this.tweenMarker();

        this.tweenChat();

        this.tweenWavesRed();

        this.tweenWavesYellow();

        this.tweenDisappear();

        this.tweenMoveClouds();

        this.tweenThunder();

        this.tweenTermomether()
 
        this.moveBoxLeft()

        this.moveBoxRight()

        this.tweenBoat();

        this.tweenDrop();

        this.cloudLeft()

        this.cloudRight()

        this.tweenLines()
    }

    tweenRotation(){
       
        document.querySelectorAll('.tweenRotate').forEach(element => {
            var tlRotation = gsap.timeline({repeat:-1});
            tlRotation.to(element,{duration:this.getRandom(1,5),rotation:"360",transformOrigin:"50% 50%",ease: "none"})

        });
    }
    fadeUPFlowerWorld(){
        var tlflowerWold = gsap.timeline({repeat:-1,yoyo:true,repeatDelay:this.getRandom(.9,1.2)});
        tlflowerWold.to(document.getElementById('world_leaves'),{duration:1,y:52})
    }
    // tweenWave
    tweenWave(){
        document.querySelectorAll('.tweenWave').forEach(element => {
            var tlWave = gsap.timeline({repeat:-1,yoyo:true,repeatDelay:this.getRandom(.9,1.2)});
            tlWave.to(element, {duration:this.getRandom(.3,.9),stagger: 0.1, drawSVG: 0});
        });
    }
    fadeInFlower(){
        document.querySelectorAll('.leaf-parent').forEach(element => {
            var tlFlowerGround = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(1,5),repeatDelay:this.getRandom(1,5)});
            tlFlowerGround.to(element.querySelector('.petal'),{duration:.3, scale:0,transformOrigin:"50% 20%",y:3})
            tlFlowerGround.to(element.querySelector('.line'),{duration:.9, drawSVG:'100% 100%'})
        });
    }
   
    tweenSwingLeft(){
        var tlSwingLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlSwingLeft.to(document.getElementById('weigh-left'),{duration:2,rotation: -6,transformOrigin: "top center", ease: "circ.inOut"})
    }
    tweenSwingRight(){
        var tlSwingLeft = gsap.timeline({repeat:-1,yoyo:true})
        tlSwingLeft.to(document.getElementById('weigh-right'),{duration:2,rotation: -6,transformOrigin: "top center", ease: "circ.inOut"})
    }

    tweenLines_1(){
        document.querySelectorAll('.red-lines_1').forEach(element => {
            var tlLines = gsap.timeline({repeat:-1, yoyo:true, delay: this.getRandom(.3, 1.2), repeatDelay: this.getRandom(1, 4)});
            tlLines.to(element.getElementsByTagName('line'),{duration: this.getRandom(.3, 1), stagger: this.getRandom(.3, 1.4), drawSVG:'100% 100%'});
        });
    }

    tweenLines_2(){
        document.querySelectorAll('.red-lines_2').forEach(element => {
            var tlLines = gsap.timeline({repeat:-1, yoyo:true, delay: this.getRandom(1, 1.2), repeatDelay: this.getRandom(1, 4)});
            tlLines.to(element.getElementsByTagName('line'),{duration: this.getRandom(.3, 1), stagger: this.getRandom(.3, 1.4), drawSVG:'100% 100%'});
        });
    }

    tweenLines_3(){
        document.querySelectorAll('.red-lines_3').forEach(element => {
            var tlLines = gsap.timeline({repeat:-1, yoyo:true, delay: this.getRandom(1, 1.2), repeatDelay: this.getRandom(1, 4)});
            tlLines.staggerFromTo(element.getElementsByTagName('line'), this.getRandom(.3, 1), {drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, this.getRandom(.2, .6));
        });
    }

    tweenMoveRedDots(){
        document.querySelectorAll('.red-dots').forEach(element => {
            var tlDots = gsap.timeline({repeat:-1,yoyo:true, delay: this.getRandom(1, 3), repeatDelay: this.getRandom(1, 3)})
            tlDots.to(element, {duration: 2, x:7, stagger: this.getRandom(.3, 2), ease: this.easing})
            tlDots.to(element, {duration: 2, x:-3, stagger: this.getRandom(.3, 2), ease: this.easing})
        });
    }

    tweenSeagullsRed(){
        var tlRed = gsap.timeline({ repeat:-1, yoyo: true, delay:this.getRandom(2,3), repeatDelay:.3
        });
       tlRed.to(document.getElementById('red-seagulls').getElementsByTagName('path'),{duration: .3,stagger: .1, y: -5,ease: this.easing});
    }

    tweenSeagullsBlack(){
        var tlBlack = gsap.timeline({repeat:-1, yoyo: true, delay:this.getRandom(1,2), repeatDelay:.5});
        tlBlack.to(document.getElementById('blue-seagulls').getElementsByTagName('path'),{duration: this.getRandom(.5, 1), stagger: .5, y: 4, ease: this.easing});
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

    tweenJump(){
        document.querySelectorAll('.tweenJump').forEach(element => {
             var tlApple = gsap.timeline({repeat:-1,yoyo:true, delay:this.getRandom(.3,1.2),repeatDelay:.3})
             tlApple.to(element, {duration: this.getRandom(.2, .9), y: -2, stagger: .5, ease: this.easing})
        });
    }

    tweenFactoryLine(){
        var tlFactory = gsap.timeline({repeat:-1,yoyo:true})
        tlFactory.to(document.getElementById('factory-line'), {duration: this.getRandom(.5, 2), x: 17, ease:'none'})
    }

    tweenMoveCheck(){
        var tlcheck = gsap.timeline({repeat:-1,yoyo:true,RepeatDelay:this.getRandom(.6,1.2),delay:this.getRandom(.6,1.2)})
        tlcheck.staggerFromTo(document.getElementById('checkmark-group'), 2, { y: 50}, { y: 0})
    }

    tweenMarker(){
        var tlMarker = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(.3,1.2),repeatDelay:.3});
        tlMarker.to(document.getElementById('marker'),{duration:this.getRandom(.6,1.2),y: 8,ease: 'none'})
    }

    tweenChat(){
        document.querySelectorAll('#chat').forEach(element => {
            var tlFloat = gsap.timeline({repeat:-1, yoyo: true})
            tlFloat.to(element, {duration: this.getRandom(.7, 2), y:-3, ease: this.easing})
            tlFloat.to(element, {duration: this.getRandom(.7, 2), y:3, ease: this.easing})
        }); 
    }

    tweenWavesRed(){
        var tlRedWaves = gsap.timeline({repeat:-1, yoyo:true, delay:1, repeatDelay:1});
        tlRedWaves.to(document.getElementById('waves-red').getElementsByTagName('path'), {duration: 1,stagger: .2, drawSVG:'100% 100%'});
    }

    tweenWavesYellow(){
        var tlYellowWaves = gsap.timeline({repeat:-1, yoyo:true, delay:1, repeatDelay:1});
        tlYellowWaves.to(document.getElementById('waves-yellow').getElementsByTagName('path'), {duration: 1,stagger: .2, drawSVG:'100% 100%'});
    }

    tweenDisappear(){
        document.querySelectorAll('.tweenDisappear').forEach(element => {
            var tlDisappear = gsap.timeline({repeat:-1, yoyo: true, delay:this.getRandom(1, 3),repeatDelay: 1})
            tlDisappear.to(element, {duration: this.getRandom(.5, 1.5), opacity: 0, ease: this.easing})
            tlDisappear.to(element, {duration: this.getRandom(.5, 1.5), opacity: 1, ease: this.easing})
        });
    }

    tweenMoveClouds(){
        var tlMove = gsap.timeline({repeat:-1, yoyo:true, delay: this.getRandom(1,2), repeatDelay: this.getRandom(1,2)});
        tlMove.to(document.getElementById('clouds'), {duration: this.getRandom(1.2,2), x:-13, ease: this.easing})
        tlMove.to(document.getElementById('clouds'), {duration: this.getRandom(1.2,2), x:6, ease: this.easing})
    }

    tweenThunder(){
        var tweenStorm = gsap.timeline({repeat:-1});
        tweenStorm.to(document.getElementById('thunder'),{duration:.1,opacity:0})
        tweenStorm.to(document.getElementById('thunder'),{duration:.1,opacity:1})
        tweenStorm.to(document.getElementById('thunder'),{duration:.1,delay:this.getRandom(1,2.4),opacity:0})
    }

    tweenTermomether(){
        var tlthermometer = gsap.timeline({repeat:-1, yoyo:true,delay:2,repeatDelay:2});
        tlthermometer.to(
            document.getElementById('thermometer_bar'),
            {duration:1,y:32,ease:'none'}
        )
        tlthermometer.to(document.querySelectorAll('.horizontal-lines'),
            {duration:this.getRandom(.6,1.2),stagger: .2, drawSVG: 0,},0);
    }

    moveBoxLeft(){
        var tlBoxleft = gsap.timeline({repeat:-1,yoyo:true})
        tlBoxleft.to(document.getElementById('box-left'), {duration:this.getRandom(1.5,6),x:-20,ease:'none'})
        tlBoxleft.to(document.getElementById('box-left'), {duration:this.getRandom(1.5,6),x:13,ease:'none'})
    }

    moveBoxRight(){
        var tlBoxRight = gsap.timeline({repeat:-1,yoyo:true})
        tlBoxRight.to(document.getElementById('box-right'), {duration:this.getRandom(1.5,6),x:13,ease:'none'})
        tlBoxRight.to(document.getElementById('box-right'), {duration:this.getRandom(1.5,6),x:-62,ease:'none'})
    }

    tweenBoat(){
        var tlRotation = gsap.timeline({repeat:-1,yoyo:true});
        tlRotation.to(document.querySelectorAll('.tweenboat'),{duration:this.getRandom(3,4.5),x:this.getRandom(4,9),ease:this.easing})
    }

    tweenDrop(){
        var tlDrop = gsap.timeline({repeat:-1,repeatDelay:2}); 
        tlDrop.to(document.querySelectorAll('.tweenDrop'),{duration:.5,y:20,opacity:0,ease:this.easing})
    }

    cloudLeft(){
        var tlCloudLeft = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(1,3)})
        tlCloudLeft.to(document.getElementById('clouds-left'), {duration:3,y:-6,ease:'none'})
    }
    cloudRight(){
        var tlCloudRight = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(1,3)})
        tlCloudRight.to(document.getElementById('clouds-right'), {duration:3,y:-6,ease:'none'})
    }

    tweenLines(){
        document.querySelectorAll('.tweenLines').forEach(element => {
            var tlWave = gsap.timeline({repeat:-1,yoyo:true,repeatDelay:this.getRandom(.9,1.2)});
            tlWave.to(element, {duration:this.getRandom(.6,1.2),stagger: 0.1, drawSVG: 0});
        });
    }
    
}
export default HeroAnimation;