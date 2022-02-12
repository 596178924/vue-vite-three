import { 
    Mesh, 
    BoxBufferGeometry,  
    MeshStandardMaterial, 
    SphereBufferGeometry,
    CylinderBufferGeometry
} from "three";

export const box: Mesh = new Mesh(
    new BoxBufferGeometry(10, 10, 10), //设置物体大小
    new MeshStandardMaterial({ color: "rgb(255,0,0)" }), //设置物体颜色
);
box.position.x = -10;

export const sphere: Mesh = new Mesh(
    new SphereBufferGeometry(5),
    new MeshStandardMaterial(),
)
sphere.position.x = 10;

export const cylinder: Mesh = new Mesh(
    new CylinderBufferGeometry(),
    new MeshStandardMaterial(),
)
cylinder.position.x = 20;