import { gsap,timeline } from 'gsap';
import { DrawSVGPlugin } from "../../gsap_extension/DrawSVGPlugin";;
gsap.registerPlugin(DrawSVGPlugin);


class OverviewAnimation{
    constructor(){
     this.init();
     this.easing = "power2.out";
    }
    
    getRandom(min, max){
        return Math.random() * (max - min) + min;
    }
    init(){

          //animates thunder
        this.tweenThunder()
        
        // water drop falling from pipe
        this.tweenDrop()

        // moves boat a few px to the right
        this.tweenBoat();

        // draw svg waves
        this.tweenLines();
        
        // Rotates 360 degrees elements.
        this.tweenRotation();

        // Termomether, scale, up and down.
        this.tweenTermomether()

        // boxes right
        this.moveBoxLeft()
        this.moveBoxRight()

        // clouds factory
        this.cloudLeft()
        this.cloudRight()
    }
    cloudLeft(){
        var tlCloudLeft = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(1,3)})
        tlCloudLeft.to(document.getElementById('clouds-left'), {duration:3,y:-6,ease:'none'})
    }
    cloudRight(){
        var tlCloudRight = gsap.timeline({repeat:-1,yoyo:true,delay:this.getRandom(1,3)})
        tlCloudRight.to(document.getElementById('clouds-right'), {duration:3,y:-6,ease:'none'})
    }
    
    moveBoxLeft(){
        var tlBoxleft = gsap.timeline({repeat:-1,yoyo:true})
        tlBoxleft.to(document.getElementById('box-left'), {duration:this.getRandom(1.5,12.5),x:-20,ease:'none'})
        tlBoxleft.to(document.getElementById('box-left'), {duration:this.getRandom(1.5,12.5),x:13,ease:'none'})
    }
    moveBoxRight(){
        var tlBoxRight = gsap.timeline({repeat:-1,yoyo:true})
        tlBoxRight.to(document.getElementById('box-right'), {duration:this.getRandom(1.5,12.5),x:13,ease:'none'})
        tlBoxRight.to(document.getElementById('box-right'), {duration:this.getRandom(1.5,12.5),x:-62,ease:'none'})
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
    
    tweenRotation(){
        document.querySelectorAll('.tweenRotate').forEach(element =>{
            var tlRotation = gsap.timeline({repeat:-1});
            tlRotation.to(document.querySelectorAll('.tweenRotate'),{duration:this.getRandom(3,6),rotation:"360",transformOrigin:"50% 50%",ease: 'none'})
        });
    }
    tweenLines(){
        document.querySelectorAll('.tweenLines').forEach(element => {
            var tlWave = gsap.timeline({repeat:-1,yoyo:true,repeatDelay:this.getRandom(.9,1.2)});
            tlWave.to(element, {duration:this.getRandom(.6,1.2),stagger: 0.1, drawSVG: 0});
        });
    }
    
    tweenBoat(){
        var tlRotation = gsap.timeline({repeat:-1,yoyo:true});
        tlRotation.to(document.querySelectorAll('.tweenboat'),{duration:this.getRandom(3,4.5),x:this.getRandom(4,9),ease:this.easing})
    }
    tweenDrop(){
        var tlDrop = gsap.timeline({repeat:-1,repeatDelay:2}); 
        tlDrop.to(document.querySelectorAll('.tweenDrop'),{duration:.5,y:20,opacity:0,ease:this.easing})
    }
    tweenThunder(){
        var tweenStorm = gsap.timeline({repeat:-1});
        tweenStorm.to(document.getElementById('thunder'),{duration:.1,opacity:0})
        tweenStorm.to(document.getElementById('thunder'),{duration:.1,opacity:1})
        tweenStorm.to(document.getElementById('thunder'),{duration:.1,delay:this.getRandom(1,2.4),opacity:0})
    }
    

}
export default OverviewAnimation;