/**
 * three js 场景
 */
import { 
    WebGLRenderer, 
    Scene, 
    PerspectiveCamera, 
    Mesh, 
    BoxBufferGeometry, 
    MeshStandardMaterial, 
    Vector3, 
    AmbientLight 
} from "three";
export class TEngine {
    private dom: HTMLElement;//挂载节点对象
    private renderer: WebGLRenderer;//WebGL 的渲染函数
    private scene: Scene;//WebGL 场景
    private camera: PerspectiveCamera//WebGL 相机

    constructor(dom: HTMLElement) {
        console.log('TEngine 实例化');
        this.dom = dom;//获取dom节点
        // console.log(this.dom);
        this.renderer = new WebGLRenderer();//实例化渲染函数
        this.scene = new Scene();//创建场景
        this.camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000);//创建相机
        this.camera.position.set(20, 20, 20); //设置相机位置
        this.camera.lookAt(new Vector3(0, 0, 0));//设置相机视角
        this.camera.up = new Vector3(0, 1, 0)



        dom.appendChild(this.renderer.domElement);//将渲染函数载入dom下
        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);//设置渲染视图的大小

        const box: Mesh = new Mesh(
            new BoxBufferGeometry(10, 10, 10), //设置物体大小
            new MeshStandardMaterial({color:"rgb(255,0,0)"}), //设置物体颜色
        );
        const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 1);// 创建环境光



        this.scene.add(box);
        this.scene.add(ambientLight)

        // this.renderer.setClearColor('rgb(255,255,255)')
        // this.renderer.clearColor();
        this.renderer.render(this.scene, this.camera);
    }
}