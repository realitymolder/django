import { Component } from "solid-js";
import ContainerAtom from "../atoms/ContainerAtom";
import LogoAtom from "../atoms/LogoAtom";
import NavigationButtonsRowMolecule from "../molecules/NavigationButtonsRowMolecule";

const NavigationOrganism: Component = () => {
  return (
    <ContainerAtom>
      <nav class="mx-auto flex w-full items-center justify-around">
        <LogoAtom />
        {/* //TODO: Replace with my logo. */}
        <NavigationButtonsRowMolecule />
        {/* //TODO: maybe add a CTA ? */}
      </nav>
    </ContainerAtom>
  );
};

export default NavigationOrganism;
