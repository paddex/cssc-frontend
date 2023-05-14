import { useQuery } from "@tanstack/react-query";
import { ImSpinner2 } from "react-icons/im";
import { mapsQuery } from "../lib/queries";

const MapList = ({ id }) => {
  const { isLoading, isError, error, data } = useQuery(mapsQuery(id));

  if (isLoading) {
    return (
      <div className="w-1/2 h-full justify-center items-center flex">
        <ImSpinner2 className="animate-spin text-4xl text-slate-700" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-1/2 h-full justify-center items-center flex">
        Es ist folgender Fehler aufgetreten: {error.message}
      </div>
    );
  }

  if (!data) {
    return "";
  }

  return (
    <div className="w-1/2 h-full flex flex-col">
      <div className="h-8">
        <h2>Mappe wechseln</h2>
      </div>
      <div className="h-[calc(100%_-_2rem)] w-full border-2 border-gray-300  flex">
        <div className="h-full w-1/3 flex"></div>
        <div className="h-full w-1/3 flex flex-col">
          <div className="flex gap-2 pt-2">
            <label>Filter:</label>
            <input
              className="border border-gray-600 px-2 rounded-md"
              placeholder="mapname"
            />
          </div>
        </div>
        <div className="h-full w-1/3 flex overflow-y-scroll">
          <ul>
            {data
              .sort((a, b) => a.name > b.name)
              .map((map) => {
                let wsInfo = "";
                if (map.workshop) {
                  wsInfo = `(WS, ${map.workshop_id})`;
                }
                return (
                  <li>
                    {map.name} {wsInfo}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapList;
