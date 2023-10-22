import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import Badge from "@mui/material/Badge";

const GridCard = (props) => {
  const [listViewOn, setListViewOn] = useState(true);
  const [fuelStations, setFuelStations] = useState([]);
  const [activeFuelStations, setActiveFuelStations] = useState([]);

  const changeView = () => {
    if (listViewOn) {
      setListViewOn(false);
    } else {
      setListViewOn(true);
    }
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Active":
        return "secondary";
        break;
      case "Inactive":
        return "text";
        break;
      default:
        return "primary";
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
    const apiUrl =
      "https://vast-gray-angelfish-tam.cyclic.app/active-fuel-stations"; // Update with your server URL

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
    <FlexBetween sx={{ ml: "10rem" }}>
      <Grid  container  spacing={12} marginTop={2}>
        {fuelStations.map((single) => {
          const {
            fs_id,
            status,
            last_seen,
            last_updated_timestamp,
            temperature,
            humidity,
          } = single;
          return (
            <Card
              sx={{
                m: "0.5rem 0.5rem",
                p: "1rem 1rem",
                backgroundColor: "primary.main"
                
              }}
            >
              <CardContent>
                <Typography
                  sx={{ p: "1rem 0rem", textAlign: "center" }}
                  variant="h4"
                  component="div"
                >
                  <Badge color={statusStyle(status)} variant="dot">
                      {fs_id}
                    </Badge>
                </Typography>
                {/* <Typography
                  sx={{ textAlign: "center" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {status}
                </Typography> */}
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  Humidity: {humidity}
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body2">
                  Temp: {temperature}
                </Typography>
                <Typography
                  sx={{ fontSize: 10, mt: "2rem", textAlign: "center" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {last_seen}
                </Typography>
                <Typography
                  sx={{ fontSize: 10, textAlign: "center" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {last_updated_timestamp}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
      {/* <div className="card">
        <div className="card-header">{props.fs_id}</div>
        <div className="card-body">
          <h5 className="card-title">{props.status}</h5>
          <h5 className="card-title">{props.humidity}</h5>
          <h5 className="card-title">{props.temperature}</h5>
          <p className="card-text">{props.last_seen}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </FlexBetween>
  );
};

export default GridCard;
