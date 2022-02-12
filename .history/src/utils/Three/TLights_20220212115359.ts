import { AmbientLight, Object3D } from "three";
export const LightsList : Object3D[] = [];

const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 3);// 创建环境光

LightsList.push(
    ambientLight
)