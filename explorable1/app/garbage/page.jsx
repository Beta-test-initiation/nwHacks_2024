"use client"

import React from 'react'
import { TGetVenueMakerOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import { useMemo } from "react";
import "./App.css";
import useMapView from "./useMapView";
import useVenue from "./useVenue";


const page = () => {
  // See Trial API key Terms and Conditions
  // https://developer.mappedin.com/api-keys
  const options = {
    mapId: "659efcf1040fcba69696e7b6",
    key: "65a0422df128bbf7c7072349",
    secret: "5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4",
  };

  const venue = useVenue(options);
  const { elementRef, mapView } = useMapView(mapRef.current, venue);

  return <div id="app" ref={elementRef} />;
}

export default page