export async function getRaces() {
  const allRaces = await fetch("https://www.dnd5eapi.co/api/races").then(
    (response) => response.json(),
  );
  return Promise.all(
    allRaces.results.map((index) =>
      fetch("https://www.dnd5eapi.co" + index.url).then((response) =>
        response.json(),
      ),
    ),
  );
}

export async function getClasses() {
  const allClasses = await fetch("https://www.dnd5eapi.co/api/classes").then(
    (response) => response.json(),
  );
  return Promise.all(
    allClasses.results.map((index) =>
      fetch("https://www.dnd5eapi.co" + index.url).then((response) =>
        response.json(),
      ),
    ),
  );
}
