export default async function UseFetch(route: string | URL) {
  const res = await fetch(route);
  if (!res.ok) throw new Error("Error went fetching data");
  const data = await res.json();
  return data;
}
