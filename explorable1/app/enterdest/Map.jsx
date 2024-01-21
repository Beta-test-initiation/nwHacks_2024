"use client"

import {
  MappedinMap,
  TGetVenueMakerOptions,
  TMapViewOptions
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import { useEffect, useMemo, useState } from "react";
import useMapChanged from "../useMapChanged";
import useMapView from "../useMapView";
import useVenueMaker from "../useVenueMaker";
import "../styles.css";
const TextToSpeechService = {
  speak: (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser.');
    }
  },
};

export default function Map({ destination }) {

  
  
  const credentials = useMemo(
    () => ({
      mapId: "659efcf1040fcba69696e7b6",
      key: "65a0422df128bbf7c7072349",
      secret: "5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4"
    }),
    []
  );
  const venue = useVenueMaker(credentials);

  const mapOptions = useMemo<TMapViewOptions>(
    () => ({
      xRayPath: true,
      multiBufferRendering: true
    }),
    []
  );
  const { elementRef, mapView } = useMapView(venue, mapOptions);

  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!mapView || !venue) {
      return;
    }

    console.log(venue.locations);

    const startLocation = venue.locations.find(
      (location) => location.id.includes("footprintcomponent")
    );

    const endLocation = venue.locations.find(
      (location) => location.id.includes(destination || "pit")
    );

    if (startLocation && endLocation) {
      const directions = startLocation.directionsTo(endLocation);
      if (directions && directions.path.length > 0) {
        mapView.Journey.draw(directions, {
          polygonHighlightColor: "#e74c3c",
          departureMarkerTemplate: (props) => {
            return `<div style="display: flex; flex-direction: column; justify-items: center; align-items: center;">
            <div class="departure-marker">${
              props.location ? props.location.name : "Departure"
            }</div>
            ${props.icon}
            </div>`;
          },
          destinationMarkerTemplate: (props) => {
            return `<div style="display: flex; flex-direction: column; justify-items: center; align-items: center;">
            <div class="destination-marker">${
              props.location ? props.location.name : "Destination"
            }</div>
            ${props.icon}
            </div>`;
          },
          connectionTemplate: (props) => {
            return `<div class="connection-marker">Take ${props.type} ${props.icon}</div>`;
          },
          pathOptions: {
            nearRadius: 0.25,
            farRadius: 1,
            color: "#40A9FF",
            displayArrowsOnPath: false,
            showPulse: true,
            pulseIterations: Infinity
          }
        });

        mapView.setMap(directions.path[0].map);

        // Set the directions to state
        setDirections(directions);

        directions.instructions.forEach((step, index) => {
          setTimeout(() => {
            TextToSpeechService.speak(step.instruction);
          }, index * 3000);
        });


        
      }
    }

    setSelectedMap(mapView.currentMap);
  }, [mapView, venue]);

  const [selectedMap, setSelectedMap] = useState();

  useMapChanged(mapView, (map) => {
    setSelectedMap(map);
  });

  return (
    <div id="app" className="text-black">
      <div id="ui">
        {venue?.venue.name ?? "Loading..."}
        {venue && selectedMap && (
          <select
            value={selectedMap.id}
            onChange={(e) => {
              if (!mapView || !venue) {
                return;
              }

              const floor = venue.maps.find(
                (map) => map.id === e.target.value
              );
              if (floor) {
                mapView.setMap(floor);
              }
            }}
          >
            {venue?.maps.map((level, index) => {
              return (
                <option value={level.id} key={index}>
                  {level.name}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div id="map-container" className="rounded-lg h-600 bg-white/[0.3] rounded-lg" ref={elementRef}>
        {directions && (
          <div className="w-200 z-10 text-black">
            {/* <h2>Directions:</h2>
            <ul>
            {directions.instructions.map((step, index) => {
              console.log(step.instruction);
              return <li key={index}>{step.instruction}</li>;
            })}
            </ul> */}
          </div>

          
        )}
      </div>
    </div>
  );
}