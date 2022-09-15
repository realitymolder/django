import { JSXElement } from "solid-js";

interface ContainerProps {
  children: JSXElement;
}

const ContainerAtom = ({ children }: ContainerProps) => {
  return <div class="mx-auto mt-2 py-6 px-52">{children}</div>;
};

export default ContainerAtom;
