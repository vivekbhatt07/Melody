// audio files
import beautiful from "./a_beautiful_day.mp3";
import world from "./We_Are_The_World.mp3";
import top from "./dbang-world.mp3";
import cinematic from "./cinematic-time-lapse-115672.mp3";
import forest from "./forest-lullaby-110624.mp3";
import podcast from "./the-podcast-intro-111863.mp3";

// audio thumbnails
import lexin from "./lexin.jpeg";
import dbanj from "./dbanj.png";
import jackson from "./jackson.jpeg";
import trinix from "./trinix.jpeg";
import { TrackType } from "../../../types";

export const tracks: TrackType[] = [
  {
    id: "1",
    title: "Trinix ft Rushawn – Its a beautiful day",
    thumbnail: trinix,
    source: "Local Storage",
    addedOn: "17/05/2022",
    src: beautiful,
  },
  {
    id: "2",
    title: "Michael Jackson – We Are The World",
    thumbnail: jackson,
    source: "Local Storage",
    addedOn: "17/05/2022",
    src: world,
  },
  {
    id: "3",
    title: "D’banj -Top Of The World",
    thumbnail: dbanj,
    source: "Local Storage",
    addedOn: "17/05/2022",
    src: top,
  },
  {
    id: "4",
    title: "Cinematic Time Lapse",
    thumbnail: lexin,
    source: "Local Storage",
    addedOn: "17/05/2022",
    src: cinematic,
  },
  {
    id: "5",
    title: "Forest Lullaby",
    thumbnail: jackson,
    source: "Local Storage",
    addedOn: "17/05/2022",
    src: forest,
  },
  {
    id: "6",
    title: "The Podcast Intro",
    thumbnail: lexin,
    source: "Local Storage",
    addedOn: "17/05/2022",
    src: podcast,
  },
];
