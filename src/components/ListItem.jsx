export default function ListItem({ data, onSelectRace }) {
  return (
    <div className="flex w-full items-center justify-between rounded bg-neutral-800 p-2">
      <div className="flex items-center gap-4">
        <img
          src={`src/assets/icons/${data.index}.jpeg`}
          alt={`${data.index}-icon`}
          className="size-16 rounded"
        />
        <p className="font-bold">{data.name}</p>
      </div>
      <button
        className="text-xl text-sky-500"
        onClick={() => onSelectRace(data)}
      >
        C
      </button>
    </div>
  );
}
