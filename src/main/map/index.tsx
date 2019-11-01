/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, RefObject, useEffect, useState, FC } from "react";
import { MapProps, MapStateProps } from "./interfaces";
import { MapContainer } from "./styled";
import * as googleMapStyles from "../../enums/google-maps-style.json";
import { connect, MapStateToProps } from "react-redux";
import { GlobalState } from "../../store";
import { CustomOverlay } from "./customOverlay";
import { mapInitialState } from "../reducer";

const GOOGLE_MAP_API_KEY = "AIzaSyA1HmoPAKyV_jbEZc5iAGyZVJ9YLGoYUQY";

const createMap = (ref: RefObject<HTMLDivElement>) => {
  return new (window as any).google.maps.Map(ref.current, {
    styles: googleMapStyles.styles,
    disableDefaultUI: true,
    ...mapInitialState
  });
};

const createMarker = (googleMap: any, position: any) => {
  return new (window as any).google.maps.Marker({
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
      CustomOverlay.prototype = new (window as any).google.maps.OverlayView();
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
  }, [center, zoom]);

  useEffect(() => {
    if (googleMap && currentActivity) {
      let overlay = new CustomOverlay(
        new (window as any).google.maps.LatLngBounds(
          new (window as any).google.maps.LatLng(
            currentActivity.ActivityLat,
            currentActivity.ActivityLng
          ),
          new (window as any).google.maps.LatLng(
            currentActivity.ActivityLat,
            currentActivity.ActivityLng
          )
        ),
        `https://platform.decathlon.com.tr:3161/${currentActivity.MainImageUrl}`,
        googleMap
      );
      console.log("overlay", overlay);
    }
  }, [currentActivity]);

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
