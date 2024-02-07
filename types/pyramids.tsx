import { StaticImageData } from "next/dist/client/image";

export interface pyramidsModel{
    name?:string,
    pyramid?:string,
    desc?:string,
    images?:StaticImageData[],
    kingImage?:StaticImageData,
    location?:string,
    url?:string,
    date?:string
}