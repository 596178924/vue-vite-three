import { AmbientLight, Object3D, PointLight, SpotLight } from "three";
export const LightsList : Object3D[] = [];

const ambientLight: AmbientLight = new AmbientLight('rgb(255,255,255)', 0.3);// 创建环境光

export const pointLight : PointLight = new PointLight(
    `rgb(255,255,255)`,
    0.7,
    150,
    0.1
)
// pointLight.position.set(50,50,50)
pointLight.position.set(100,100,100)
pointLight.castShadow = true;//允许产生阴影

export const spotLight: SpotLight = new SpotLight(
    'rgb(255,255,255',
    1,
    400,
    Math.PI / 180 * 30,
    0,
    0
);
spotLight.position.set(-50,50,-50);
spotLight.castShadow = true;//允许产生阴影



LightsList.push(
    spotLight,

    pointLight,
)