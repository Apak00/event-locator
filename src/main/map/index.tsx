/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, RefObject, useEffect, useState, FC } from "react";
import { MapProps, MapStateProps, GoogleMapPosition } from "./interfaces";
import { MapContainer } from "./styled";
import * as googleMapStyles from "../../enums/google-maps-style.json";
import { connect, MapStateToProps } from "react-redux";
import { GlobalState } from "../../store";
import { mapInitialState } from "../reducer";

const GOOGLE_MAP_API_KEY = "AIzaSyA1HmoPAKyV_jbEZc5iAGyZVJ9YLGoYUQY";

const createMap = (ref: RefObject<HTMLDivElement>) => {
  return new window.google.maps.Map(ref.current, {
    styles: googleMapStyles.styles as any,
    disableDefaultUI: true,
    ...mapInitialState
  });
};

const createMarker = (googleMap: any, position: GoogleMapPosition) => {
  return new window.google.maps.Marker({
    position,
    map: googleMap,
    icon: require("../../images/activity-location-marker.svg")
  });
};

const Map: FC<MapProps> = ({
  activities,
  center,
  zoom,
  currentActivity,
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
    // This Effect creates markers on the map according to acitivities that is in redux store

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
    // This Effect moves the location of map according center and zoom. These props come from redux store

    if (googleMap) {
      googleMap.setCenter(center);
      googleMap.setZoom(zoom);
    }
  }, [center, zoom]);

  useEffect(() => {
    // This Effect controls the way AcitivityInfo shown on the map and listener on marker

    if (googleMap && currentActivity) {
      let currentAcitvityPosition = {
        lat: parseFloat(currentActivity.ActivityLat),
        lng: parseFloat(currentActivity.ActivityLng)
      };
      var contentString = document
        .getElementsByName("currentActivity")[0]
        .cloneNode(true);

      var infowindow = new window.google.maps.InfoWindow({
        content: contentString as Node,
        maxWidth: 300
      });
      let marker = createMarker(googleMap, currentAcitvityPosition);
      infowindow.open(googleMap, marker);
      let markerListener = marker.addListener("click", function() {
        infowindow.open(googleMap, marker);
      });
      return () => {
        infowindow.close();
        google.maps.event.removeListener(markerListener);
      };
    }
  }, [googleMap, currentActivity]);

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
  zoom: state.mapState.zoom,
  currentActivity: state.currentActivity
});
export default connect(mapStateToProps)(Map);
