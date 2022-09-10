import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';

interface NavButtonInterface {
  linkName: string;
  href: string;
}

const NavButton: Component<NavButtonInterface> = (props) => {
  return (
    <NavLink href={props.href} class=" mx-10" activeClass="text-green-500">
      {props.linkName}
    </NavLink>
  );
};

export default NavButton;
