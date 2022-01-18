import TF_UI from './../utilities/TF_UI';

class Navbar{
    constructor(){
        this.burger = document.querySelector(".b--burger-a");
        this.nav = document.querySelector(".b--layout-a__hd");
        this.breakepoint = 992; //this matches with grid brakepoint
        this.events();
    }
    events(){
        this.burger.addEventListener("click", event => this.toggleNavbar(event))
        window.addEventListener('resize',()=>this.resizeWindow())
    }
    toggleNavbar(){
       var tfui = new TF_UI();
       tfui.toggleClass(this.nav,'b--layout-a__hd--is-active');
       tfui.toggleClass(this.burger, 'b--burger-a--is-active');
    }
    resizeWindow(){
        if(window.innerWidth > this.breakepoint){
            var tfui = new TF_UI();
            tfui.removeClass(this.nav,'b--layout-a__hd--is-active')
        }
    }

}
export default Navbar;