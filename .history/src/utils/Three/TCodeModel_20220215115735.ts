import { MeshStandardMaterial, Mesh, BufferGeometry, Object3D } from "three"

export const codeModelList : Object3D[] = []

const geometry: BufferGeometry = new BufferGeometry();

const material : MeshStandardMaterial = new MeshStandardMaterial();

const codeBox: Mesh = new Mesh(geometry,material);

codeModelList.push(
    codeBox
)