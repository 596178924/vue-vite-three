/**
 * three js 场景
 */
export class TEngine {
    private dom : HTMLElement;
    constructor(dom: HTMLElement) {
        console.log('TEngine 实例化')
        this.dom = dom;
        console.log(this.dom)

    }
}