/**
 * three js 场景
 */
import { WebGLRenderer, Scene, PerspectiveCamera, Mesh, BoxBufferGeometry, MeshStandardMaterial, Vector3 } from "three";
export class TEngine {
    private dom: HTMLElement;//挂载节点对象
    private renderer: WebGLRenderer;//WebGL 的渲染函数
    private scene: Scene;//WebGL 场景
    private camera: PerspectiveCamera//WebGL 相机

    constructor(dom: HTMLElement) {
        console.log('TEngine 实例化');
        this.dom = dom;
        // console.log(this.dom);
        this.renderer = new WebGLRenderer();
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000);
        this.camera.position.set(20,20,20);
        this.camera.lookAt(new Vector3(0,0,0))
        dom.appendChild(this.renderer.domElement);
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);

        const box: Mesh = new Mesh(
            new BoxBufferGeometry(10, 10, 10),
            new MeshStandardMaterial()
        );
        this.scene.add(box);


        this.renderer.render(this.scene, this.camera);
    }
}