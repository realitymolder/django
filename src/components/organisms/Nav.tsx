import { NavLink } from 'solid-app-router';
import { Component } from 'solid-js';
import NavButton from '../atoms/NavButton';

const Nav: Component = () => {
  return (
    <nav class="mx-auto flex w-full items-center justify-around py-6 px-52">
      <NavButton linkName="Home" href="/" />
      <NavButton linkName="Tour Dates" href="/tour" />
      <NavButton linkName="Music" href="/music" />
      <NavButton linkName="Merch" href="/merch" />
      <NavButton linkName="Contact" href="/contact" />
    </nav>
  );
};

export default Nav;
