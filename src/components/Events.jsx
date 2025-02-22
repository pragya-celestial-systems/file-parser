import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import EventCard from "./EventCard";
import { useEventContext } from "../context/EventsContext";

function Events() {
  const { events, isLoading } = useEventContext();

  return (
    <Box sx={{ width: "70%", margin: "auto", cursor: "pointer" }}>
      <Box sx={{ margin: "2rem" }}>
        <b>Result: </b> {events?.length || 0}
      </Box>
      {isLoading ? (
        <Box
          sx={{
            margin: "auto",
            height: "60vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {events && events.length > 0 ? (
            events.map((event, index) => (
              <EventCard key={index} eventData={event} />
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: 600,
                margin: "2rem",
              }}
            >
              No Events Found!
            </p>
          )}
        </Box>
      )}
    </Box>
  );
}

export default Events;
