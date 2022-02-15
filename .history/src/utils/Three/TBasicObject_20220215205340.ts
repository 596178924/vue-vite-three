import { pictureTexture } from './TTextures';
import { 
    Mesh, 
    BoxBufferGeometry,  
    MeshStandardMaterial, 
    SphereBufferGeometry,
    CylinderBufferGeometry,
    Object3D,
    Line,
    Points,
    PlaneBufferGeometry,
    Color
} from "three";

import {VertexNormalsHelper} from 'three/examples/jsm/helpers/VertexNormalsHelper'

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
    new MeshStandardMaterial({
        color: 'rgb(0,75,75)',
        roughness: 0,//光滑度
    })
)
stage.position.y = -5;
stage.castShadow = true;//允许生成阴影
stage.receiveShadow = true;//允许生成阴影

//立方体
const box: Mesh = new Mesh(//正方体
    new BoxBufferGeometry(20, 20, 20),
    new MeshStandardMaterial({
        color: 'witch',
        // metalness: 1,// 金属 0-1
        // roughness:0.7,// 光滑度 0-1
        // map: pictureTexture
    }),
);
box.position.y = 10;
// box.position.x = 25;
box.castShadow = true;//允许生成阴影
box.receiveShadow = true;//允许生成阴影

//构建法线
const boxNormalHelper = new VertexNormalsHelper(box,10,new Color('blue').getHex());

//相框
const plane: Mesh = new Mesh(
    new PlaneBufferGeometry(75,50),
    new MeshStandardMaterial({
        map: pictureTexture
    })
)
plane.position.y = 45;
plane.position.x = 30;
plane.scale.set(0.5,0.5,0.5);


BasicObjectList.push(
    // stage,
    box,
    plane,
    boxNormalHelper,
);