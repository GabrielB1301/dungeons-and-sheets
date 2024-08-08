import { useEffect, useState } from "react";
import { getRaces } from "../api";
import Modal from "./Modal";
export default function Races() {
  const [races, setRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);
  useEffect(() => {
    getRaces().then(setRaces);
  }, []);
  function handleModal(url) {
    setSelectedRace(url);
  }
  console.log("races");
  return (
    <div className="flex select-none flex-col gap-4">
      {races.map((race) => (
        <div
          key={race.index}
          className="flex min-w-96 max-w-xl items-center justify-between rounded bg-neutral-800 p-2"
        >
          <div className="flex items-center gap-4">
            <img
              src={`src/assets/races/${race.index}.jpeg`}
              alt={`${race.index}-icon`}
              className="size-16 rounded"
            />
            <p className="font-bold">{race.name}</p>
          </div>
          <button
            onClick={() => handleModal(race.url)}
            className="text-xl text-sky-500"
          >
            +
          </button>
        </div>
      ))}
      {selectedRace ? <Modal url={selectedRace} /> : null}
    </div>
  );
}
