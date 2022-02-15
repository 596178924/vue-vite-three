import {
    MeshStandardMaterial,
    Mesh,
    BufferGeometry,
    Object3D,
    BufferAttribute,
    Color,
} from "three"
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";
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


// const points: Float32Array = new Float32Array([ //设置顶点位置
//     -codeBoxSize, codeBoxSize, codeBoxSize,
//     codeBoxSize, codeBoxSize, codeBoxSize,
//     codeBoxSize, codeBoxSize, -codeBoxSize,
//     -codeBoxSize, codeBoxSize, -codeBoxSize,

//     -codeBoxSize, -codeBoxSize, codeBoxSize,
//     codeBoxSize, -codeBoxSize, codeBoxSize,
//     codeBoxSize, -codeBoxSize, -codeBoxSize,
//     -codeBoxSize, -codeBoxSize, -codeBoxSize,
// ]);

const points: Float32Array = new Float32Array([ //设置顶点位置
    -codeBoxSize, codeBoxSize, codeBoxSize,
    codeBoxSize, codeBoxSize, codeBoxSize,
    codeBoxSize, codeBoxSize, -codeBoxSize,
    -codeBoxSize, codeBoxSize, -codeBoxSize,

    -codeBoxSize, -codeBoxSize, codeBoxSize,
    codeBoxSize, -codeBoxSize, codeBoxSize,
    codeBoxSize, -codeBoxSize, -codeBoxSize,
    -codeBoxSize, -codeBoxSize, -codeBoxSize,

    -codeBoxSize, codeBoxSize, codeBoxSize,
    -codeBoxSize, codeBoxSize, -codeBoxSize,
    -codeBoxSize, -codeBoxSize, -codeBoxSize,
    -codeBoxSize, -codeBoxSize, codeBoxSize,

    codeBoxSize, codeBoxSize, codeBoxSize,
    codeBoxSize, codeBoxSize, -codeBoxSize,
    codeBoxSize, -codeBoxSize, -codeBoxSize,
    codeBoxSize, -codeBoxSize, codeBoxSize,

    -codeBoxSize, codeBoxSize, codeBoxSize,
    codeBoxSize, codeBoxSize, codeBoxSize,
    -codeBoxSize, -codeBoxSize, codeBoxSize,
    codeBoxSize, -codeBoxSize, codeBoxSize,

    -codeBoxSize, codeBoxSize, -codeBoxSize,
    codeBoxSize, codeBoxSize, -codeBoxSize,
    -codeBoxSize, -codeBoxSize, -codeBoxSize,
    codeBoxSize, -codeBoxSize, -codeBoxSize,
]);

const normals: Float32Array = new Float32Array([ //定义法线
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

])

const index: number[] = [ //绘制顶点
    0, 1, 2,//顶面
    2, 3, 0,

    4, 5, 6,
    5, 7, 4,

    8,9,10,
    10,11,8,

    12,13,14,
    14,15,12,

    13, 14, 15,
    14, 15, 13,

    16, 17, 18,//底面
    17, 18, 16,
];
const uv: Float32Array = new Float32Array([ //构建顶点
    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,

    0, 0,
    1, 0,
    1, 1,
    0, 1,
]);



const geometry: BufferGeometry = new BufferGeometry();
geometry.setAttribute('position', new BufferAttribute(points, 3));
geometry.setAttribute('normal', new BufferAttribute(points, 3));
geometry.setAttribute('uv', new BufferAttribute(uv, 2));
geometry.setIndex(index);


const material: MeshStandardMaterial = new MeshStandardMaterial({
    color: 'white',
    // side: DoubleSide,
    // map: pictureTexture
});

const codeBox: Mesh = new Mesh(geometry, material);
codeBox.position.y = 10;
// codeBox.rotation.x = Math.PI / 180 * 90;
const boxNormalHelper = new VertexNormalsHelper(codeBox, 10, new Color('deeppink').getHex());


codeModelList.push(
    codeBox,
    boxNormalHelper,
)