import { Component } from "solid-js";
import H1Atom from "../atoms/H1Atom";
import SocialButton from "../atoms/SocialsButtonAtom";

const FooterOrganism: Component = () => {
  return (
    <div class="max-h mx-auto mt-10 mb-10 text-center">
      <p>django@toubul.eu</p>
      <div>
        <SocialButton href="www.walla.com">{/* <H1Atom /> */}</SocialButton>
      </div>
      <p>Copyright 2009-2022 &copy; DJANGO</p>
    </div>
  );
};

export default FooterOrganism;
