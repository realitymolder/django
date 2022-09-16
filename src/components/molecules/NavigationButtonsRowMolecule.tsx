import { Component } from "solid-js";
import NavButton from "../atoms/NavigationButtonAtom";

const NavigationButtonsRowMolecule: Component = () => {
  return (
    <div>
      <NavButton linkName="Home" href="/" />
      <NavButton linkName="Tour Dates" href="/tour" />
      <NavButton linkName="Music" href="/music" />
      <NavButton linkName="Merch" href="/merch" />
      <NavButton linkName="Contact" href="/contact" />
    </div>
  );
};

export default NavigationButtonsRowMolecule;
