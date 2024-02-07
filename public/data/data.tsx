
"use client";

import { useTranslation } from "react-i18next";
import Djoser_image1 from "./Pyramids Images/Djoser/Image1.jpg";
import Djoser_image2 from "./Pyramids Images/Djoser/Image2.jpg";
import Djoser_image3 from "./Pyramids Images/Djoser/Image3.jpg";
import Djoser from "./Pyramids Images/Djoser/King.jpg";

import Sinfro_image1 from "./Pyramids Images/meduim/image1.jpg";
import Sinfro_image2 from "./Pyramids Images/meduim/image2.jpg";
import Sinfro_image3 from "./Pyramids Images/meduim/image3.jpg";
import Sinfro from "./Pyramids Images/meduim/King.jpg";

import Dahshour_image1 from "./Pyramids Images/Dahshour/image1.jpg";
import Dahshour_image2 from "./Pyramids Images/Dahshour/image2.jpg";
import Dahshour_image3 from "./Pyramids Images/Dahshour/image3.jpg";
import Dahshour from "./Pyramids Images/Dahshour/King.jpg";
import { pyramidsModel } from "@/types/pyramids";

export function DataFunction() {
    const {t}= useTranslation();
    const PyramidsData:pyramidsModel[]=[
    {date:t('_Djoser_date'),name:t('_Djoser'),pyramid:t('_Djoser_pyramid'),desc:t('_Djoser_desc'),location:t('_Djoser_loc'),images:[Djoser_image1,Djoser_image2,Djoser_image3],kingImage:Djoser},
    {date:t('_Sinfro_date'),name:t('_Sinfro'),pyramid:t('_Sinfro_pyr'),desc:t('_Sinfro_desc'),location:t('_Sinfro_loc'),images:[Sinfro_image1,Sinfro_image2,Sinfro_image3],kingImage:Sinfro},
    {date:t('_Dahshour_date'),name:t('_Dahshour'),pyramid:t('_Dahshour_pyr'),desc:t('_Dahshour_desc'),location:t('_Dahshour_loc'),images:[Dahshour_image1,Dahshour_image3,Dahshour_image2],kingImage:Dahshour},
    
    ]
  return  PyramidsData;
}

