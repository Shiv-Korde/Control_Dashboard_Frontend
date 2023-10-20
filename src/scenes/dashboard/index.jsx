// export default Dashboard;
import ListCard from "components/ListCard";
import React from "react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [listViewOn, setListViewOn] = useState(true);
  const [fuelStations, setFuelStations] = useState();
  const [activeFuelStations, setActiveFuelStations] = useState();

  const changeView = () => {
    if (listViewOn) {
      setListViewOn(false);
    } else {
      setListViewOn(true);
    }
  };

  useEffect(() => {
    // Define the URL for your Express server
    const apiUrl = "https://vast-gray-angelfish-tam.cyclic.app/fuel-stations"; // Update with your server URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFuelStations(data))
      .catch((error) =>
        console.error("Error fetching fuel stations: " + error)
      );
    console.log(fuelStations);
  }, []);

  useEffect(() => {
    // Define the URL for your Express server
    const apiUrl = "https://vast-gray-angelfish-tam.cyclic.app/active-fuel-stations"; // Update with your server URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setActiveFuelStations(data))
      .catch((error) =>
        console.error("Error fetching fuel stations: " + error)
      );
    console.log(activeFuelStations);
  }, []);

  useEffect(() => {}, [listViewOn]);

  return (
        <div>
          <ListCard  />
        </div>
  );
};

export default Dashboard;
