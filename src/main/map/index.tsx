/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, RefObject, useEffect, useState, FC } from "react";
import { MapProps, MapStateProps } from "./interfaces";
import { MapContainer } from "./styled";
import * as googleMapStyles from "../../enums/google-maps-style.json";
import { connect, MapStateToProps } from "react-redux";
import { GlobalState } from "../../store";

const GOOGLE_MAP_API_KEY = "AIzaSyA1HmoPAKyV_jbEZc5iAGyZVJ9YLGoYUQY";

const createMap = (ref: RefObject<HTMLDivElement>) => {
  return new (window as any).google.maps.Map(ref.current, {
    zoom: 16,
    center: {
      lat: 10,
      lng: 10
    },
    styles: googleMapStyles.styles,
    disableDefaultUI: true
  });
};

const createMarker = (googleMap: any, position: any) => {
  return new (window as any).google.maps.Marker({
    position,
    map: googleMap
  });
};

const Map: FC<MapProps> = ({
  activities,
  center,
  zoom,
  ...props
}: MapProps) => {
  const googleMapRef: RefObject<HTMLDivElement> = useRef(null);
  const [googleMap, setGoogleMap]: [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ] = useState(null);

  useEffect(() => {
    // This effect runs on mount ; initializes google map
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      const googleMap = createMap(googleMapRef);
      setGoogleMap(googleMap);
    });
  }, []);

  useEffect(() => {
    if (googleMap && activities) {
      activities.forEach(activity => {
        const markerPosition: any = {
          lat: parseFloat(activity.ActivityLat),
          lng: parseFloat(activity.ActivityLng)
        };
        createMarker(googleMap, markerPosition);
      });
    }
  }, [activities, googleMap]);

  useEffect(() => {
    if (googleMap) {
      googleMap.setCenter(center);
      googleMap.setZoom(zoom);
    }
  }, [googleMap, center, zoom]);

  return <MapContainer id="google-map" ref={googleMapRef} />;
};

/**
 * Represents mapStateToProps
 *
 * @param {GlobalState} state
 */
const mapStateToProps: MapStateToProps<MapStateProps, any, GlobalState> = (
  state: GlobalState
): any => ({
  center: state.mapState.center,
  zoom: state.mapState.zoom
});
export default connect(mapStateToProps)(Map);
