import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";

interface NavigationButtonInterface {
  linkName: string;
  href: string;
}

const NavigationButton: Component<NavigationButtonInterface> = (props) => {
  return (
    <NavLink
      href={props.href}
      class="btn mx-10 text-titles"
      end
      activeClass="text-primary"
    >
      {props.linkName}
    </NavLink>
  );
};

export default NavigationButton;
