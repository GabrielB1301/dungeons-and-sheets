import { useEffect, useRef, useState } from "react";
import Accordion from "../components/Accordion";

export default function Modal({ url }) {
  const [raceData, setRaceData] = useState({});
  useEffect(() => {
    async function getRaces() {
      const race = await fetch("https://www.dnd5eapi.co" + url).then(
        (response) => response.json(),
      );
      setRaceData(race);
    }
    getRaces();
  }, []);

  console.log("modal");
  const traits = raceData.traits?.map((trait) => trait.name).join(",") + ".";
  return (
    <dialog
      open
      className="h-3/4 w-full max-w-[524px] bg-[url('src/assets/bg-papper.jpg')]"
    >
      <div className="size-full overflow-y-auto p-4">
        <header className="flex justify-between gap-4">
          <div>
            <h1 className="mb-1 text-2xl">{raceData.name}</h1>
            <p className="text-sm">{raceData.alignment}</p>
          </div>
          <img
            src={`src/assets/races/${raceData.index}.jpeg`}
            alt=""
            className="size-28 rounded"
          />
        </header>
        <p className="py-4 text-sm">
          <span className="font-semibold">Race Traits: </span>
          {traits}
        </p>
        <div>
          <h2 className="border-t border-neutral-500 py-4 text-lg">
            {raceData.name} Traits
          </h2>
        </div>
      </div>
      <form method="dialog" className="relative bottom-0 w-full font-semibold">
        <button className="w-1/2 border border-green-500 bg-white py-4 text-neutral-500">
          Cancel
        </button>
        <button className="w-1/2 border border-green-500 bg-green-500 py-4 text-neutral-50">
          Choose Race
        </button>
      </form>
    </dialog>
  );
}
