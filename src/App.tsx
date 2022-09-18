import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import NavigationOrganism from "./components/organisms/NavigationOrganism";
import { Repo } from "./components/RepoCard";
import Home from "./HomeOLD";
import SavedRepos from "./components/pages/SavedRepos";
import HomePage from "./components/pages/HomePage";
import MusicPage from "./components/pages/MusicPage";
import MerchPage from "./components/pages/MerchPage";
import ContactPage from "./components/pages/ContactPage";

const [username, setUsername] = createSignal("realitymolder");
const [repos, setRepos] = createSignal<Repo[]>([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created`
  );
  setRepos(await res.json());
  console.log(repos());
});

const App: Component = () => {
  return (
    <div>
      <NavigationOrganism />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos };
export default App;
