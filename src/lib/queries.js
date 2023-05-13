export const serversQuery = () => ({
  queryKey: ["servers"],
  queryFn: async () => {
    const url = `/api/servers`;

    const data = await fetch(url);
    const json = await data.json();

    return json;
  },
});

export const playerQuery = () => ({
  queryKey: ["players"],
  queryFn: async () => {
    const url = `/api/servers/${id}/players`;

    const data = await fetch(url);
    const json = await data.json();

    return json;
  },
});
