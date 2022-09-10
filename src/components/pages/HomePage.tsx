import { Component, For } from "solid-js";
import { repos, setUsername, username } from "../../App";
import RepoCard, { Repo } from "../RepoCard";

const HomePage: Component = () => {
  return (
    <div>
      <div class="mx-auto w-full text-center">
        <h1 class="mb-8 text-center text-4xl">
          Github repos for <span class="text-yellow-500">{username()}</span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
