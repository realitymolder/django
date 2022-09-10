import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import NavButton from "../atoms/NavigationButton";

const NavigationOrganism: Component = () => {
  return (
    <nav class="mx-auto flex w-full items-center justify-around py-6 px-52">
      <div>
        <NavButton linkName="Home" href="/" />
        <NavButton linkName="Tour Dates" href="/tour" />
      </div>

      <h1 class="text-4xl font-bold">DJANGO</h1>
      <div>
        <NavButton linkName="Music" href="/music" />
        <NavButton linkName="Merch" href="/merch" />
        <NavButton linkName="Contact" href="/contact" />
      </div>
    </nav>
  );
};

export default NavigationOrganism;
