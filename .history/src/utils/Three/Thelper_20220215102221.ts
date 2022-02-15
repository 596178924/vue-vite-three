import { AxesHelper, GridHelper, Object3D } from "three";


export const HelperList: Object3D[] = [];
 const axesHelper: AxesHelper = new AxesHelper(500);//创建三维轴
 const gridHelper: GridHelper = new GridHelper(500, 20, 'rgb(200,200,200)', 'rgb(100,100,100)');//创建二维网格线

//  this.scene.add(axesHelper);//场景设置三维轴
//  this.scene.add(gridHelper);//场景设置二维网格线
HelperList.push(
    axesHelper,
    gridHelper,
)