import { 
    Mesh, 
    BoxBufferGeometry,  
    MeshStandardMaterial, 
    SphereBufferGeometry,
    CylinderBufferGeometry,
    Object3D,
    Line,
    Points
} from "three";

//Mesh 网格物体
//new BoxBufferGeometry() //几何对象
//new MeshStandardMaterial() //网格标准材质
/*
// const material = new MeshStandardMaterial({color: 'blue'});
// const geometry = new BoxBufferGeometry(10, 10, 10);

// export const box: Mesh = new Mesh(//正方体
//     geometry, //设置物体大小
//     material, //设置物体颜色
// );
// box.position.x = -10;

// export const sphere: Line = new Line(//圆形
//     geometry,
//     material,
// )
// sphere.position.x = 10;

// export const cylinder: Mesh = new Mesh(//圆柱体1
//     new CylinderBufferGeometry(5,5,10,32,5),
//     new MeshStandardMaterial(),
// )
// cylinder.position.z = 10;

// export const cylinder2: Mesh = new Mesh(//圆柱体2
//     new CylinderBufferGeometry(5,5,10,32,5),
//     new MeshStandardMaterial(),
// )
// cylinder2.position.z = -10;
// BasicObjectList.push(
//     box,
//     sphere,
//     cylinder,
//     cylinder2,
// )
*/


export const BasicObjectList : Object3D[] = [];


// 地面
const stage : Mesh = new Mesh(
    new BoxBufferGeometry(200, 10, 200),
    new MeshStandardMaterial({color: 'rgb(150,150,150)'})
)
stage.position.y = -5;

//立方体
const box: Mesh = new Mesh(//正方体
    new BoxBufferGeometry(20, 20, 20),
    new MeshStandardMaterial({color: 'red'}),

);
box.position.y = 10;

BasicObjectList.push(
    stage,
    box
);