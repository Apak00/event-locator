import styled from "styled-components";
import React from "react";

export const ActivityCardContainer = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 13px;
  button {
    background-color: rgb(6, 124, 182);
    font-size: 13px;
    width: 100%;
    max-width: 200px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    transform: skewX(-10deg);
    justify-content: center;
    display: flex;
    border-width: medium;
    border-style: none;
    border-color: initial;
    border-image: initial;
    margin: 5px auto;
  }
`;

export const ImageContainer = styled(({ url, ...props }) => <div {...props} />)`
  height: 100px;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;

export const ActivityDetails = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(239, 239, 239);
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 15px 0px;
  margin: 10px 0px;
  border-radius: 3px;
  & > * {
    text-align: center;
    width: 80%;
    margin-bottom: 5px;
  }
  span:first-child {
    position: relative;
    ::after {
      content: "₺";
      position: absolute;
      top: 0px;
      font-size: 15px;
      right: -20px;
      color: rgb(236, 102, 7);
    }
  }
  span {
    :nth-child(2) {
      margin-bottom: 10px;
    }
  }
`;
