export default function Header() {
  console.log("header");
  return (
    <div className="flex items-center gap-4">
      <div>
        <label htmlFor="picture" className="cursor-pointer">
          <img
            src="profile.png"
            alt="profile-picture"
            className="size-36 border"
          />
        </label>
        <input
          type="file"
          name="profile-picture"
          id="picture"
          className="hidden"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="character-name" className="text-xl">
          Character's Name
        </label>
        <input
          type="text"
          className="h-8 w-48 rounded p-1 text-neutral-950 outline-none"
        />
        <button>Randomize</button>
      </div>
    </div>
  );
}
