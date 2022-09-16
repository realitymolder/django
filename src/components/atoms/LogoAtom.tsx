import { Component } from "solid-js";
import { NavLink } from "solid-app-router";

const LogoAtom: Component = () => {
  return (
    <NavLink href={"/"}>
      <h1 class="text-4xl font-bold">DJANGO</h1>
    </NavLink>
  );
};

export default LogoAtom;