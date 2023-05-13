import { createContext, useState } from "react";
import PlayerList from "../components/PlayerList";
import ServerList from "../components/ServerList";

export const ServerContext = createContext();

const Index = () => {
  const [selectedServer, setSelectedServer] = useState("");

  return (
    <ServerContext.Provider value={{ selectedServer, setSelectedServer }}>
      <div className="flex w-full">
        <div className="h-1/3 w-2/3 border-2 border-gray-300">
          <ServerList />
        </div>
        <div className="h-1/3 w-1/3 border-2 border-gray-300">
          <PlayerList />
        </div>
      </div>
    </ServerContext.Provider>
  );
};

export default Index;
