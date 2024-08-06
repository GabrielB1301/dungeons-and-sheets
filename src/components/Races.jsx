import { IoIosArrowForward } from "react-icons/io";
export default function Races() {
  const races = [
    {index: 'dragonborn', name: 'Dragonborn'}
  ]
  return (
    <div className="flex select-none flex-col gap-4">
      {races.map((race) => (
        <div className="flex min-w-96 max-w-xl items-center justify-between rounded bg-neutral-800 p-2">
          <div className="flex items-center gap-4">
            <img
              src={`src/assets/races/${race.index}.jpeg`}
              alt={`${race.index}-icon`}
              className="size-16 rounded"
            />
            <p className="font-bold">{race.name}</p>
          </div>
          <button
            className="text-xl text-sky-500"
          >
            <IoIosArrowForward />
          </button>
        </div>
      ))}
    </div>
  );
}
