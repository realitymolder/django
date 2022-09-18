import { Component, For } from "solid-js";
import H1Atom from "../../../shared/atoms/H1Atom";
import BackgroundAtom from "../atoms/BackgroundAtom";

const HomePage: Component = () => (
  <div>
    <BackgroundAtom />
    <div class="mx-auto min-h-screen w-full text-center">
      {/* <h1 class="mb-8 text-center text-4xl">Just a Test M8xnxx.com</h1> */}
      <H1Atom text="Wow" />
    </div>
  </div>
);

export default HomePage;
