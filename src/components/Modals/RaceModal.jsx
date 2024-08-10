import { forwardRef, useImperativeHandle, useRef } from "react";
import Accordion from "./Accordion";
import { createPortal } from "react-dom";

const RaceModal = forwardRef(function RaceModal({ data }, ref) {
  const modal = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={modal}
      className="fixed m-auto h-3/4 w-full max-w-[524px] bg-[url('src/assets/bg-papper.jpg')] backdrop:bg-neutral-800 backdrop:bg-opacity-90"
    >
      <div className="size-full overflow-y-scroll p-4 pb-16">
        {data ? (
          <>
            <header className="flex justify-between gap-4">
              <div>
                <h1 className="mb-1 text-2xl">{data.name}</h1>
                <p className="text-sm">{data.alignment}</p>
              </div>
              <img
                src={`src/assets/icons/${data.index}.jpeg`}
                alt=""
                className="size-28 rounded"
              />
            </header>
            <div className="py-4 text-sm">
              <p>
                <span className="font-semibold">Speed</span> {data.speed}
              </p>
              <p>
                <span className="font-semibold">Race Traits: </span>
                {data.traits?.map((trait) => trait.name).join(",")}.
              </p>
            </div>
            <div className="flex gap-4 pb-4">
              {data.ability_bonuses.map((ability_bonus) => (
                <Status
                  name={ability_bonus.ability_score.name}
                  bonus={ability_bonus.bonus}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="border-t border-neutral-500 py-4 text-lg">
                {data.name} Traits
              </h2>
              {data.traits?.map((trait) => (
                <Accordion title={trait.name} url={trait.url} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <menu className="absolute bottom-0 w-full font-semibold">
        <button
          onClick={() => modal.current.close()}
          className="w-1/2 border border-green-500 bg-white py-4 text-neutral-500"
        >
          Cancel
        </button>
        <button
          onClick={() => modal.current.close()}
          className="w-1/2 border border-green-500 bg-green-500 py-4 text-neutral-50"
        >
          Choose Race
        </button>
      </menu>
    </dialog>,
    document.getElementById("modal"),
  );
});

const Status = ({ name, bonus }) => {
  return (
    <div className="relative flex h-16 w-14 flex-col items-center justify-center rounded-md border border-neutral-400 text-2xl">
      <span className="mb-5">+{bonus}</span>
      <div className="absolute bottom-0 h-5 w-full bg-neutral-400 text-center text-sm">
        {name}
      </div>
    </div>
  );
};

export default RaceModal;
