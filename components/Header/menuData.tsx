"use client";
import { Menu } from "@/types/menu";
import { useTranslation } from "react-i18next";

export const MeunData =()=>{
  const{t} = useTranslation();
const menuData: Menu[] = [
  {
    id: 1,
    title: `${t("_home")}`,
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: `${t("_about")}`,
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title:  `${t("_pyramids")}`,
    path: "/blog",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: `${t("_our_Work")}`,
  //   path: "/blog",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: `${t("_support")}`,
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 4,
  //   title: `${t("_pages")}`,
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },

  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];

return { menuData }
}
