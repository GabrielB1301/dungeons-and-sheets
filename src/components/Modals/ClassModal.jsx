import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ data }, ref) {
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
                src={`src/assets/races/${data.index}.jpeg`}
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

export default Modal;
