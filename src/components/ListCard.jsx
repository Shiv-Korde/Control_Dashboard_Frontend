import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FlexBetween from "./FlexBetween";

const ListCard = (props) => {
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
    <FlexBetween sx={{ m: "2rem 5rem" }}>
      <TableContainer component={Paper} sx={{bgcolor: 'primary.main'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell>
                <strong>fs_id</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Status</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Last Seen</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Humidity&nbsp;(%)</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Temperature&nbsp;(^c)</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Last Updated Timestamp</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fuelStations.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fs_id}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.last_seen}</TableCell>
                <TableCell align="right">{row.humidity}</TableCell>
                <TableCell align="right">{row.temperature}</TableCell>
                <TableCell align="right">
                  {row.last_updated_timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FlexBetween>
  );
};

export default ListCard;
