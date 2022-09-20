import { faFlag } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { Component } from "solid-js";

const MusicPage: Component = () => {
  return (
    <div>
      <h2>MusicPage</h2>

      <Fa icon={faFlag} size="2x" color="var(--color-titles)" scale={1.2} />
    </div>
  );
};

export default MusicPage;
