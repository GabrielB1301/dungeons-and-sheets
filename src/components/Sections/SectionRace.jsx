import { useEffect, useState, useRef } from "react";
import { getRaces } from "../../api";
import ListItem from "../ListItem";
import RaceModal from "../Modals/RaceModal";

export default function SectionRace() {
  const [racesData, setRacesData] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);
  const modal = useRef();

  useEffect(() => {
    getRaces().then(setRacesData);
  }, []);

  useEffect(() => {
    if (selectedRace) {
      modal.current.open();
    }
  }, [selectedRace]);

  return (
    <div className="flex w-full select-none flex-col items-center justify-center gap-4">
      {racesData.map((raceData) => (
        <ListItem data={raceData} onSelectRace={setSelectedRace} />
      ))}
      <RaceModal ref={modal} data={selectedRace} />
    </div>
  );
}
