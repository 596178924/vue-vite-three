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
    AmbientLight,
    AxesHelper,
    GridHelper,
    MOUSE
} from "three";
import Stats from "three/examples/jsm/libs/stats.module"
import { OrbitControls,MapControls } from "three/examples/jsm/controls/OrbitControls.js"


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



        this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);//设置渲染视图的大小

        const box: Mesh = new Mesh(
            new BoxBufferGeometry(10, 10, 10), //设置物体大小
            new MeshStandardMaterial({ color: "rgb(255,0,0)" }), //设置物体颜色
        );
        const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 1);// 创建环境光
        const axesHelper: AxesHelper = new AxesHelper(500);//创建三维轴
        const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200,200,200)', 'rgb(100,100,100)');//创建二维网格线



        this.scene.add(box);//场景放置物体
        this.scene.add(ambientLight);//场景设置环境光
        this.scene.add(axesHelper);//场景设置三维轴
        this.scene.add(gridHelper);//场景设置二维网格线

        // this.renderer.setClearColor('rgb(255,255,255)');
        // this.renderer.clearColor();

        // this.renderer.render(this.scene, this.camera);//渲染视图

        //初始化性能监视器
        const stats = Stats();
        const statsDom = stats.domElement;
        statsDom.style.position = 'fixed'
        statsDom.style.top = '5px'
        statsDom.style.right = '5px'
        statsDom.style.left = 'unset'
        //结束初始化性能监视器

        // 初始轨道控制器
        const orbitControls: OrbitControls = new MapControls(this.camera,this.renderer.domElement);//使用MapControls 是因为这个才是创建的类，它继承了 OrbitControls
        // orbitControls.autoRotate = true;//围绕目标旋转
        orbitControls.enableDamping = true;//轨道阻尼器
        orbitControls.mouseButtons = {
            LEFT: null as unknown as MOUSE,
            MIDDLE: MOUSE.DOLLY,

        }


        const renderFun = () => {
            // console.log('renderer anim')
            box.position.x += -0.01;
            box.rotation.y += 0.001;
            // this.camera.position.x += -0.01;//控制相机位置
            orbitControls.update();//更新控制器，先变化后渲染，所以放在渲染函数前
            this.renderer.render(this.scene, this.camera);
            stats.update();//设置监视器跟随帧率
            requestAnimationFrame(renderFun);//定时渲染视图
        }
        renderFun();
        dom.appendChild(this.renderer.domElement);//将渲染函数载入dom下
        dom.appendChild(statsDom);//将渲染函数载入dom下

    }

}