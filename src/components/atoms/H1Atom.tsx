import { Component } from "solid-js";

interface H1AtomInterface {
  text: string;
}

const H1Atom: Component<H1AtomInterface> = (props) => {
  return <h1 class="text-4xl font-bold">{props.text}</h1>;
};

export default H1Atom;
