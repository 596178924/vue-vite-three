import { AmbientLight, Object3D, PointLight } from "three";
export const LightsList : Object3D[] = [];

const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 0.3);// 创建环境光

export const pointLight : PointLight = new PointLight(
    `rgb(255,255,255)`,
    0.7,
    200,
    0.5
)
// pointLight.position.set(20,20,20)
pointLight.position.set(100,100,100)
LightsList.push(
    // ambientLight,
    pointLight
)