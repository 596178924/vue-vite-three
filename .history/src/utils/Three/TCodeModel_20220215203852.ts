import {
    MeshStandardMaterial,
    Mesh,
    BufferGeometry,
    Object3D,
    BufferAttribute,
} from "three"
import { pictureTexture } from "./TTextures";

export const codeModelList: Object3D[] = []
// 自定义物体

const codeBoxSize: number = 10

// const points: Float32Array = new Float32Array([
//     -codeBoxSize,  codeBoxSize,  codeBoxSize,
//      codeBoxSize,  codeBoxSize,  codeBoxSize,
//      codeBoxSize,  codeBoxSize, -codeBoxSize,

//     -codeBoxSize,  codeBoxSize, -codeBoxSize,
//     -codeBoxSize,  codeBoxSize,  codeBoxSize,
//      codeBoxSize,  codeBoxSize, -codeBoxSize,
// ]);


const points: Float32Array = new Float32Array([
    -codeBoxSize, codeBoxSize, codeBoxSize,
    codeBoxSize, codeBoxSize, codeBoxSize,
    codeBoxSize, codeBoxSize, -codeBoxSize,
    -codeBoxSize, codeBoxSize, -codeBoxSize,

    -codeBoxSize, -codeBoxSize, codeBoxSize,
    codeBoxSize, -codeBoxSize, codeBoxSize,
    codeBoxSize, -codeBoxSize, -codeBoxSize,
    -codeBoxSize, -codeBoxSize, -codeBoxSize,
]);

const index: number[] = [ //绘制顶点
    0, 1, 2,//顶面
    2, 3, 0,

    0, 4, 5,
    5, 1, 0,

    5, 6, 2,
    1, 5, 2,

    2, 6, 7,
    7, 3, 2,

    0, 3, 7,
    0, 7, 4,

    4, 7, 5,//底面
    7, 6, 5,
];
const uv: Float32Array = new Float32Array([
    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,
])

const geometry: BufferGeometry = new BufferGeometry();
geometry.setAttribute('position', new BufferAttribute(points, 3));
geometry.setAttribute('normal', new BufferAttribute(points, 3));
geometry.setAttribute('uv', new BufferAttribute(uv, 2));
geometry.setIndex(index);


const material: MeshStandardMaterial = new MeshStandardMaterial({
    // color: 'white',
    // side: DoubleSide,
    map: pictureTexture
});

const codeBox: Mesh = new Mesh(geometry, material);
codeBox.position.y = 45;
codeBox.position.x = Math.PI / 180 * 90;


codeModelList.push(
    codeBox
)