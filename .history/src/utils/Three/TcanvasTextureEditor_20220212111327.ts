export class TCanvasTextureEditor {
    canvas: HTMLCanvasElement;
    constructor(width ?: number = 512,height ?:number = 512) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
    }

    draw(fun: (ctx: CanvasRenderingContext2D)=> void) {
        const ctx = this.canvas.getContext('2d');
        if(ctx) {
            fun(ctx)
        } else {
            console.warn(`you browser can not support canvas 2d`);
        }
    }
    preview() {
        const canvas = this.canvas;
        canvas.style.position = 'fixed';
        canvas.style.top = '25%';
        canvas.style.left = '25%';
        document.body.appendChild(this.canvas)
    }
}