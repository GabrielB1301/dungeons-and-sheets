export async function getRaces() {
  const allRaces = await fetch("https://www.dnd5eapi.co/api/races").then(
    (response) => response.json(),
  );
  return allRaces.results;
}
