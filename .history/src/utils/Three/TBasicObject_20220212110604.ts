import { 
    Mesh, 
    BoxBufferGeometry,  
    MeshStandardMaterial, 
    SphereBufferGeometry,
    CylinderBufferGeometry,
    Object3D
} from "three";
//Mesh 网格物体
//new BoxBufferGeometry() //几何对象
//new MeshStandardMaterial() //网格标准材质


export const BasicObjectList : Object3D[] = [];

export const box: Mesh = new Mesh(//正方体
    new BoxBufferGeometry(10, 10, 10), //设置物体大小
    new MeshStandardMaterial({ color: "rgb(255,0,0)" }), //设置物体颜色
);
box.position.x = -10;

export const sphere: Mesh = new Mesh(//圆形
    new SphereBufferGeometry(5),
    new MeshStandardMaterial(),
)
sphere.position.x = 10;

export const cylinder: Mesh = new Mesh(//圆柱体1
    new CylinderBufferGeometry(5,5,10,32,5),
    new MeshStandardMaterial(),
)
cylinder.position.z = 10;

export const cylinder2: Mesh = new Mesh(//圆柱体2
    new CylinderBufferGeometry(5,5,10,32,5),
    new MeshStandardMaterial(),
)
cylinder2.position.z = -10;

BasicObjectList.push(
    box,
    sphere,
    cylinder,
    cylinder2,
)