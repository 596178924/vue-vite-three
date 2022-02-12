import { AmbientLight, Object3D, PointLight } from "three";
export const LightsList : Object3D[] = [];

const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 1);// 创建环境光

const pointLight : PointLight = new PointLight(
    `rgb(255,255,255)`,
    0.3,
    200,
    0.1
)
pointLight.position.set(100,100,100)
LightsList.push(
    // ambientLight,
    pointLight
)