import postscribe from 'postscribe';

class Dyn { 
    constructor(){
        this.init();
    }

    init(){
        console.log('dynamic observer/ postscribe');
        postscribe('#introDiv', '<h1>Dynamic PostScribe</h1>');

    }

  
}
export default Dyn;