export default class DoubleSlider {
    element;
    subElement;

    constructor({
        min = 100,
        max = 200,
        currency = '$'
      } = {}) {
        this.min = min;
        this.max = max;
        this.currency = currency

        this.selectedRange = {
			'min': this.min,
			'max': this.max
		};

        this.render();

    }
    get rangeTemplate(){
        return `
            <div class="range-slider">
                <span data-elem="from">${this.currency + this.min}</span>
                <div data-elem="inner" class="range-slider__inner">
                    <span data-elem="progress" class="range-slider__progress" style="${this.getProgressStyle}"></span>
                    <span data-elem="thumbLeft" class="range-slider__thumb-left" style="${this.getRangeLeft()}"></span>
                    <span data-elem="thumbRight" class="range-slider__thumb-right" style="${this.getRangeRight()}"></span>
                </div>
                <span data-elem="to">${this.currency + this.max}</span>
            </div>`
    }

    render(){
        this.element = document.createElement('div')
        this.element.innerHTML = this.rangeTemplate

        this.initListeners()
    }

    initListeners(){
        this.leftThumb = this.element.querySelector('.range-slider__thumb-left')
        this.rightThumb = this.element.querySelector('.range-slider__thumb-right')

        this.rightThumb.addEventListener("mousedown", function(e) {
            console.log('right here')
            return false;
        });

        this.leftThumb.addEventListener("mousedown", function(e) {
            console.log('left here')
            return false;
        });
    }
    
    getProgressStyle(){
        
    }
    getRangeLeft(){

    }
    getRangeRight(){

    }

    remove() {
        this.element.remove()
    }

    destroy() {
        this.remove();
    }
}
