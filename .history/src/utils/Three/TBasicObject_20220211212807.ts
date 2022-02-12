import { 
    Mesh, 
    BoxBufferGeometry,  
    MeshStandardMaterial 
} from "three";

 const box: Mesh = new Mesh(
    new BoxBufferGeometry(10, 10, 10), //设置物体大小
    new MeshStandardMaterial({ color: "rgb(255,0,0)" }), //设置物体颜色
);