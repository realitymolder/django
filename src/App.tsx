import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import ContactPage from "./lib/features/contact/pages/ContactPage";
import HomePage from "./lib/features/home/pages/HomePage";
import MerchPage from "./lib/features/merch/pages/MerchPage";
import MusicPage from "./lib/features/music/pages/MusicPage";

import FooterOrganism from "./lib/shared/organisms/FooterOrganism";
import NavigationOrganism from "./lib/shared/organisms/NavigationOrganism";
import { Repo } from "./RepoCard";

const [username, setUsername] = createSignal("realitymolder");
const [repos, setRepos] = createSignal<Repo[]>([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created`
  );
  setRepos(await res.json());
  console.log(repos());
});

const App: Component = () => (
  <div>
    <NavigationOrganism />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/merch" element={<MerchPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <FooterOrganism />
  </div>
);

export { username, setUsername, repos };
export default App;
