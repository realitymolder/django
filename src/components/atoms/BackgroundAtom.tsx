import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

// interface NavigationButtonInterface {
//   linkName: string;
//   href: string;
// }

const BackgroundAtom: Component = (props) => {
  return (
    <div class="md:bg-purple absolute inset-0 -z-10 my-auto mx-auto max-h-screen min-h-screen bg-main bg-top bg-no-repeat md:w-[100%]" />
  );
};

export default BackgroundAtom;
