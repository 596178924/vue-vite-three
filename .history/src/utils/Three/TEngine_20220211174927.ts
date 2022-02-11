/**
 * three js 场景
 */
import { WebGLRenderer } from "three";
export class TEngine {
    private dom : HTMLElement;
    private renderer : WebGLRenderer;
    constructor(dom: HTMLElement) {
        console.log('TEngine 实例化');
        this.dom = dom;
        this.renderer = new WebGLRenderer();
        console.log(this.dom);
        dom.appendChild(this.renderer.domElement);
        this.renderer.setSize(dom.offsetWidth,dom.offsetHeight,true);
    }
}