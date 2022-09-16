import { Component, For } from "solid-js";
import H1Atom from "../atoms/H1Atom";

const HomePage: Component = () => (
  <div>
    <div class="mx-auto w-full text-center">
      {/* <h1 class="mb-8 text-center text-4xl">Just a Test M8xnxx.com</h1> */}
      <H1Atom text="Wow" />
    </div>
  </div>
);

export default HomePage;
