import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ImSpinner2 } from "react-icons/im";

import { serversQuery } from "../lib/queries";
import { ServerContext } from "../pages/Index";

const ServerListEntry = ({ server }) => {
  let mapName = server.info.Map.split("/");
  mapName = mapName[mapName.length - 1];

  const { selectedServer, setSelectedServer } = useContext(ServerContext);

  return (
    <tr
      className={`${
        selectedServer == server.name
          ? "bg-blue-700 text-white border-blue-900"
          : "even:bg-gray-100 border-gray-300"
      } w-full border-t border-b`}
      onClick={() => setSelectedServer(server.name)}
    >
      <td className="px-2 py-1">
        {server.info.Name} ({server.name})
      </td>
      <td className="px-2 py-1">{server.ip}</td>
      <td className="px-2 py-1">{server.port}</td>
      <td className="px-2 py-1">
        {server.info.Players}/{server.info.MaxPlayers}
      </td>
      <td className="px-2 py-1">{mapName}</td>
    </tr>
  );
};

const ServerList = () => {
  const { isLoading, isError, error, data } = useQuery(serversQuery());

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <ImSpinner2 />
      </div>
    );
  }

  if (isError) {
    <div className="w-full h-full flex justify-center items-center">
      <p>An Error occured while fetching the server data: {error.message}</p>
    </div>;
  }

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th align="left" className="px-2 py-1">
            Name
          </th>
          <th align="left" className="px-2 py-1">
            IP
          </th>
          <th align="left" className="px-2 py-1">
            Port
          </th>
          <th align="left" className="px-2 py-1">
            Spieler
          </th>
          <th align="left" className="px-2 py-1">
            Mappe
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((server) => {
          return <ServerListEntry server={server} key={server.name} />;
        })}
      </tbody>
    </table>
  );
};

export default ServerList;
