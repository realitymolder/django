import { Component, JSXElement } from "solid-js";

interface SocialButtonInterface {
  href: string;
  children: JSXElement;
}

const SocialButton: Component<SocialButtonInterface> = (props) => {
  return <a href={props.href}>{props.children}</a>;
};

export default SocialButton;
