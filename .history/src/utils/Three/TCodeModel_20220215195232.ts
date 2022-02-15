import { MeshStandardMaterial, Mesh, BufferGeometry, Object3D, BufferAttribute } from "three"

export const codeModelList: Object3D[] = []
// 自定义物体

const points: Float32Array = new Float32Array([
    -5,  5,  5,
     5,  5,  5,
     5,  5, -5,
    -5,  5, -5,
]);

const geometry: BufferGeometry = new BufferGeometry();
geometry.setAttribute('position', new BufferAttribute(points,3))


const material: MeshStandardMaterial = new MeshStandardMaterial({
    color: 'white',
});

const codeBox: Mesh = new Mesh(geometry, material);

codeModelList.push(
    codeBox
)