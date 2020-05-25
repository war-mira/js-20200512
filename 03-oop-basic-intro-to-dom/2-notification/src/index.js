export default class NotificationMessage {
    element;
    wrapper;

    constructor(msg, obj){
        this.text = msg ? msg : 'Пустое сообщение'
        this.duration = obj ? obj.duration : 2000
        this.sec = obj ? ((obj.duration) / 1000) : 2
        this.type = obj ? obj.type : 'error'

        this.render()
    }

    get template() {
        return `
            <div class="notification ${this.type}" style="--value:${this.sec}s">
                <div class="timer"></div>
                <div class="inner-wrapper">
                    <div class="notification-header">${this.type}</div>
                    <div class="notification-body">
                        ${this.text}
                    </div>
                </div>
            </div>`
        ;
    }

    render(){
        const element = document.createElement('div');
        element.innerHTML = this.template;

        this.element = element.firstElementChild;
    }

    show(container){
        this.wrapper = container ? container : document.body
        this.wrapper.append(this.element)

        setTimeout(() => this.remove(), this.duration)
    }
    remove () {
        this.element.remove();
    }

    destroy() {
        this.remove();
    }

}
