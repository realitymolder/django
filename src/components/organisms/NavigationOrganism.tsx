import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import ContainerAtom from "../atoms/ContainerAtom";
import NavigationButtonsRowMolecule from "../molecules/NavigationButtonsRowMolecule";

const NavigationOrganism: Component = () => {
  return (
    <ContainerAtom>
      <nav class="mx-auto flex w-full items-center justify-around">
        <h1 class="text-4xl font-bold">DJANGO</h1>
        {/* //TODO: Replace with my logo. */}
        <NavigationButtonsRowMolecule />
        {/* //TODO: maybe add a CTA ? */}
      </nav>
    </ContainerAtom>
  );
};

export default NavigationOrganism;
