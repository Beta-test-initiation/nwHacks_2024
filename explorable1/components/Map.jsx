"use client"

import {
    TGetVenueMakerOptions,
    getVenueMaker,
    MappedinMap,
    E_SDK_EVENT,
  } from "@mappedin/mappedin-js";
  import React, { useRef, useEffect, useMemo } from "react";
  import useVenue from "../hooks/useVenue";
  import useMapView from "../hooks/useMapView";
  import "@mappedin/mappedin-js/lib/mappedin.css";
  
  export default function Map() {
    // See Trial API key Terms and Conditions
    // https://developer.mappedin.com/api-keys
    const options = {
      mapId: "65ac4f4704c23e7916b1d0c8",
      key: "65ac610dca641a9a1399dc4b",
      secret: "63fae86d7074a4e4ec75876f92711afd6e93d9e5f6b5609933808e6dabbad40b",
    };

    const mapRef = useRef(null);
    const venue = getVenueMaker(options);
    const mapView = useMapView(mapRef.current, venue);
  
    useEffect(() => {
      if (!mapView) return;
  
      // Initialize labels
      mapView.FloatingLabels.labelAllLocations();
  
      // Add event listener for map change
      function handleMapChanged(map) {
        console.log(map);
      }
      mapView.on(E_SDK_EVENT.MAP_CHANGED, handleMapChanged);
  
      return () => {
        // Cleanup
        mapView.FloatingLabels.removeAll();
        mapView.off(E_SDK_EVENT.MAP_CHANGED, handleMapChanged);
      };
    }, [mapView]);
  
    return <div id="mappedin-map" ref={mapRef} />;
  }