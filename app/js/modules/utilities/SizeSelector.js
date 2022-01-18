class SizeSelector { 
    constructor(){
        this.rangeValues = "";
        this.range = document.querySelector('#selector');
        // this.adjustmentDiv = document.getElementById('adjustment')
        this.modifyItem = document.querySelector('.b--range-a__bd__item-left');
        this.init();
    }

    init(){
        document.getElementById('sizeSelector').addEventListener('input', () => { this.initRange() });
    }

    initRange(){
        this.rangeValues = this.range.value;
        this.modifyItem.style.transform = `scale(${1-(this.rangeValues/100)})`;
        // this.adjustmentDiv.style.left = this.rangeValues+ '%';
    }
    
}
export default SizeSelector;