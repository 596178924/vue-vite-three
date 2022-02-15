import { Texture, TextureLoader } from "three";
import DOAXImage from '@/assets/images/DOAX-VenusVacation.jpg'

const textureLoader: TextureLoader = new TextureLoader();
export const pictureTexture: Texture = textureLoader.load(DOAXImage);
// export const pictureTexture: Texture = textureLoader.load('/DOAX-VenusVacation.jpg');