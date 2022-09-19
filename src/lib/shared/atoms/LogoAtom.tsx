import { Component } from "solid-js";
import { NavLink } from "@solidjs/router";

const LogoAtom: Component = () => {
  return (
    <NavLink href={"/"}>
      <img
        src="/src/assets/images/django-logo.png"
        alt="DJANGO logo"
        // height={30}
        width={200}
      />
    </NavLink>
  );
};

export default LogoAtom;
