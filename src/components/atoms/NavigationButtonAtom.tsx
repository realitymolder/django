import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

interface NavigationButtonInterface {
  linkName: string;
  href: string;
}

const NavigationButton: Component<NavigationButtonInterface> = (props) => {
  return (
    <NavLink
      href={props.href}
      class="btn mx-10"
      end
      activeClass="text-green-500"
    >
      {props.linkName}
    </NavLink>
  );
};

export default NavigationButton;
