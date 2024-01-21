"use client"
import React, {useRef, useEffect} from 'react';

import {
  getVenueMaker,
  showVenue,
  TGetVenueMakerOptions,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
const MapPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          mapId: "659efcf1040fcba69696e7b6",
          key: "65a0422df128bbf7c7072349",
          secret: "5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4",
        };

        const venue = await getVenueMaker(options);
        showVenue(mapRef.current, venue);
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    };

    fetchData();
  }, [mapRef]);

  return (
    <div>
      
      <div id="app" className="w-400 h-400" ref={mapRef} />
      
    </div>
  );
};

export default MapPage;
