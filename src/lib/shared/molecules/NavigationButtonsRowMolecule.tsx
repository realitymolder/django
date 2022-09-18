import { Component } from "solid-js";
import NavigationButton from "../atoms/NavigationButtonAtom";

const NavigationButtonsRowMolecule: Component = () => {
  return (
    <div>
      <NavigationButton linkName="Home" href="/" />
      <NavigationButton linkName="Tour Dates" href="/tour" />
      <NavigationButton linkName="Music" href="/music" />
      <NavigationButton linkName="Merch" href="/merch" />
      <NavigationButton linkName="Contact" href="/contact" />
    </div>
  );
};

export default NavigationButtonsRowMolecule;
