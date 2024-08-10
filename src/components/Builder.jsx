import { useState } from "react";
import SectionRace from "./Sections/SectionRace";
import SectionClass from "./Sections/SectionClass";
import SectionEquipment from "./Sections/SectionEquipment";
import SectionAbilities from "./Sections/SectionAbilities";
import SectionDescription from "./Sections/SectionDescription";

export default function Builder() {
  const [builderSection, setBuilderSection] = useState(0);
  let content;
  switch (builderSection) {
    case 0:
      content = <SectionRace />;
      break;
    case 1:
      content = <SectionClass />;
      break;
    case 2:
      content = <SectionAbilities />;
      break;
    case 3:
      content = <SectionDescription />;
      break;
    case 4:
      content = <SectionEquipment />;
      break;
    default:
      content = <SectionRace />;
  }
  const sections = ["Races", "Class", "Abilities", "Description", "Equipment"];
  return (
    <div className="relative flex w-[min(90%,512px)] flex-col items-center justify-center">
      <ul className="flex w-full justify-between text-sm">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`cursor-pointer ${index === builderSection ? "border-b border-sky-500" : null}`}
            onClick={() => setBuilderSection(index)}
          >
            {section}
          </li>
        ))}
      </ul>
      {content}
    </div>
  );
}
