import { createContext, useState } from "react";
import MapList from "../components/MapList";
import ServerList from "../components/ServerList";

export const ServerContext = createContext();

const Index = () => {
  const [selectedServer, setSelectedServer] = useState("");

  return (
    <ServerContext.Provider value={{ selectedServer, setSelectedServer }}>
      <div className="h-1/3 flex w-full flex-col p-2">
        <div className="h-8">
          <h2 className="text-xl">Server-Liste</h2>
        </div>
        <div className="h-[calc(100%_-_2rem)] w-full border-2 border-gray-300 overflow-y-scroll">
          <ServerList />
        </div>
      </div>
      <div className="h-1/3 flex w-full p-2">
        <div className="w-1/2 h-full flex flex-col">
          <div className="h-8">
            <h2>Häufige Befehle</h2>
          </div>
          <div className="h-[calc(100%_-_2rem)] w-full border-2 border-gray-300 overflow-y-scroll"></div>
        </div>
        <MapList id={selectedServer} />
      </div>
    </ServerContext.Provider>
  );
};

export default Index;
