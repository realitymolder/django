import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

interface SocialButtonInterface {
  href: string;
  linkType: "Instagram" | "Facebook" | "YouTube";
}

const SocialButton: Component<SocialButtonInterface> = (props) => {
  return (
    <a href={props.href}>
      <button class="">
        {props.linkType ? (
          <div className="mb-56" />
        ) : (
          // Test?!
          <div className="mx-auto">
            <CTAInputField location={location} />
          </div>
        )}
      </button>
    </a>
  );
};

export default SocialButton;
