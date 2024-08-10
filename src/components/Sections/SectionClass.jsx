import { useEffect, useState } from "react";
import { getClasses } from "../../api";
import ListItem from "../ListItem";

export default function SectionClass() {
  const [classesData, setclassesData] = useState([]);
  useEffect(() => {
    getClasses().then(setclassesData);
  }, []);

  return (
    <div className="flex w-full select-none flex-col items-center gap-4">
      {classesData.map((classData) => (
        <ListItem data={classData} />
      ))}
    </div>
  );
}
