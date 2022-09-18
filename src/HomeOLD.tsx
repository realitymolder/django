import { Component, For } from "solid-js";
import { repos, setUsername, username } from "./App";
import RepoCard, { Repo } from "./RepoCard";

const Home: Component = () => {
  const fetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput"
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-8" onSubmit={(event) => fetchWithUsername(event)}>
        <div class=" mx-auto flex max-w-4xl">
          <input
            type="text"
            class="input flex w-full bg-gray-500"
            id="usernameInput"
            required
          />
          <button class="btn btn-success ml-5">Fetch</button>
        </div>
      </form>
      <div class="mx-auto w-full text-center">
        <h1 class="mb-8 text-center text-4xl">
          Github repos for <span class="text-yellow-500">{username()}</span>
        </h1>
      </div>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
