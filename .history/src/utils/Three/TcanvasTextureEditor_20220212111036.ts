export class TCanvasTextureEditor {
    canvas: HTMLCanvasElement;
    constructor() {
        this.canvas = document.createElement('canvas')
    }

    draw(fun: (ctx: CanvasRenderingContext2D)=> void) {
        const ctx = this.canvas.getContext('2d');
        if(ctx) {
            fun(ctx)
        } else {
            console.warn(`you browser can not support canvas 2d`);
        }
    }
}