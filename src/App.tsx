import React, { useEffect, useState } from "react";
import "./App.css";
import { getRandomMechanic } from "./constants/mechanics";
import { getRandomTheme } from "./constants/themes";
import { getRandomModifier } from "./constants/modifiers";
import { getRandomSoundTheme } from "./constants/sound";
import { getRandomGenre } from "./constants/genres";

function App() {
  const [lockState, setLockState] = useState({
    mechanics: { locked: false, suggestion: getRandomMechanic() },
    themes: { locked: false, suggestion: getRandomTheme() },
    modifier: { locked: false, suggestion: getRandomModifier() },
    music: { locked: false, suggestion: getRandomSoundTheme() },
    genre: { locked: false, suggestion: getRandomGenre() },
  });

  const [savedIdeas, setSavedIdeas] = useState<
    { mechanic: string; theme: string; modifier: string }[]
  >([]);

  useEffect(() => {
    const saved = localStorage.getItem("gig-saved-ideas");

    if (saved) {
      setSavedIdeas(JSON.parse(saved));
    }
  }, []);

  const onGenerate = () => {
    let newMechanic = lockState.mechanics.suggestion;
    let newTheme = lockState.themes.suggestion;
    let newModifier = lockState.modifier.suggestion;
    let newMusic = lockState.music.suggestion;
    let newGenre = lockState.genre.suggestion;

    if (!lockState.mechanics.locked) {
      newMechanic = getRandomMechanic();
    }

    if (!lockState.themes.locked) {
      newTheme = getRandomTheme();
    }

    if (!lockState.modifier.locked) {
      newModifier = getRandomModifier();
    }

    if (!lockState.music.locked) {
      newMusic = getRandomSoundTheme();
    }

    if (!lockState.genre.locked) {
      newGenre = getRandomGenre();
    }

    setLockState({
      mechanics: {
        locked: lockState.mechanics.locked,
        suggestion: newMechanic,
      },
      themes: {
        locked: lockState.themes.locked,
        suggestion: newTheme,
      },
      modifier: {
        locked: lockState.modifier.locked,
        suggestion: newModifier,
      },
      music: {
        locked: lockState.music.locked,
        suggestion: newMusic,
      },
      genre: {
        locked: lockState.genre.locked,
        suggestion: newGenre,
      },
    });
  };

  return (
    <div className="App">
      <div className="top">
        <h1>Sorta Bad Game Idea Generator</h1>
        <p className="sub">
          By{" "}
          <a
            target="__blank"
            rel="noopener noreferrer"
            href="https://nathanielrichards.dev"
          >
            Nathaniel Richards
          </a>
        </p>
        <p className="suggestion-text">
          Click 'Lock Suggestion' to keep a generated suggestion
        </p>
      </div>
      <div className="options">
        <div className="section mechanics">
          <h2>Mechanic</h2>
          <p>{lockState.mechanics.suggestion}</p>
          <button
            onClick={() =>
              setLockState({
                ...lockState,
                mechanics: {
                  locked: !lockState.mechanics.locked,
                  suggestion: lockState.mechanics.suggestion,
                },
              })
            }
          >
            {lockState.mechanics.locked
              ? "Unlock Suggestion"
              : "Lock Suggestion"}
          </button>
        </div>
        <div className="section themes">
          <h2>Theme</h2>
          <p>{lockState.themes.suggestion}</p>
          <button
            onClick={() =>
              setLockState({
                ...lockState,
                themes: {
                  locked: !lockState.themes.locked,
                  suggestion: lockState.themes.suggestion,
                },
              })
            }
          >
            {lockState.themes.locked ? "Unlock Suggestion" : "Lock Suggestion"}
          </button>
        </div>
        <div className="section modifiers">
          <h2>Modifier</h2>
          <p>{lockState.modifier.suggestion}</p>
          <button
            onClick={() =>
              setLockState({
                ...lockState,
                modifier: {
                  locked: !lockState.modifier.locked,
                  suggestion: lockState.modifier.suggestion,
                },
              })
            }
          >
            {lockState.modifier.locked
              ? "Unlock Suggestion"
              : "Lock Suggestion"}
          </button>
        </div>
        <div className="section music">
          <h2>Music</h2>
          <p>{lockState.music.suggestion}</p>
          <button
            onClick={() =>
              setLockState({
                ...lockState,
                music: {
                  locked: !lockState.music.locked,
                  suggestion: lockState.music.suggestion,
                },
              })
            }
          >
            {lockState.music.locked ? "Unlock Suggestion" : "Lock Suggestion"}
          </button>
        </div>
        <div className="section genre">
          <h2>Genre</h2>
          <p>{lockState.genre.suggestion}</p>
          <button
            onClick={() =>
              setLockState({
                ...lockState,
                genre: {
                  locked: !lockState.genre.locked,
                  suggestion: lockState.genre.suggestion,
                },
              })
            }
          >
            {lockState.genre.locked ? "Unlock Suggestion" : "Lock Suggestion"}
          </button>
        </div>
      </div>
      <div className="bottom">
        <button className="bottom-btn" onClick={onGenerate}>
          Generate
        </button>
        <button className="bottom-btn">Save Idea</button>
      </div>
    </div>
  );
}

export default App;
