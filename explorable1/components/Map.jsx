"use client"

import {
    TGetVenueOptions,
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
    const options = useMemo<TGetVenueOptions>(
      () => ({
        venue: "mappedin-demo-mall",
        clientId: "5eab30aa91b055001a68e996",
        clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1"
      }),
      []
    );
    const mapRef = useRef<HTMLDivElement | null>(null);
    const venue = useVenue(options);
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