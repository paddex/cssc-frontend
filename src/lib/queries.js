export const serversQuery = () => ({
  queryKey: ["servers"],
  queryFn: async () => {
    const url = `/api/servers`;

    const data = await fetch(url);
    const json = await data.json();

    return json;
  },
  refetchInterval: 1000,
});

export const mapsQuery = (id) => ({
  queryKey: [id, "maps"],
  queryFn: async () => {
    const url = `/api/servers/${id}/maps`;

    const data = await fetch(url);
    const json = await data.json();

    return json;
  },
  enabled: id != "",
});
