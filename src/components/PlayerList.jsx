import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { ServerContext } from "../pages/Index";
import { playerQuery } from "../lib/queries";
import { ImSpinner2 } from "react-icons/im";

const PlayerList = () => {
  const { selectedServer } = useContext(ServerContext);

  if (selectedServer == "") {
    return (
      <div>
        Wähle einen Server aus der Liste um die verbundenen Spieler anzuzeigen
      </div>
    );
  }

  const { isLoading, isError, error, data } = useQuery(playerQuery);

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <ImSpinner2 />
      </div>
    );
  }

  if (isError) {
    <div className="flex w-full h-full items-center justify-center">
      Es ist folgender Fehler aufgetreten: {error.message}
    </div>;
  }

  <pre>{JSON.stringify(data)}</pre>;
};

export default PlayerList;
