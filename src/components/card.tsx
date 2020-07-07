import React from "react";
import CardProps from "../interfaces/cardProps";
import { Card, ProgressBar } from "react-bootstrap";

const CardComponent: React.FC<CardProps> = ({
  countryData,
  worldData,
  colorTheme,
}) => {
  return (
    <div>
      <Card
        text="white"
        bg="warning"
        style={{ width: "18rem", position: "fixed", top: 200, left: 550 }}
      >
        <Card.Header>Cases</Card.Header>
        <Card.Body>
          <Card.Title>
            <h5
              style={
                colorTheme === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              Cases: {countryData.cases}
            </h5>
            <ProgressBar
              now={
                //@ts-ignore
                (parseInt(countryData.cases) / parseInt(worldData.cases)) * 300
              }
            />
            <h5
              style={
                colorTheme === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              {" "}
              Today: {countryData.todayCases}
            </h5>
            <ProgressBar
              now={
                //@ts-ignore
                (parseInt(countryData.todayCases) /
                  //@ts-ignore
                  parseInt(worldData.todayCases)) *
                300
              }
            />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        text="white"
        bg="danger"
        style={{ width: "18rem", position: "fixed", top: 200, left: 850 }}
      >
        <Card.Header>Deaths</Card.Header>
        <Card.Body>
          <Card.Title>
            <h5
              style={
                colorTheme === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              {" "}
              Deaths: {countryData.deaths}
            </h5>
            <ProgressBar
              now={
                //@ts-ignore
                (parseInt(countryData.deaths) / parseInt(worldData.deaths)) *
                300
              }
            />
            <h5
              style={
                colorTheme === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              {" "}
              Today: {countryData.todayDeaths}
            </h5>
            <ProgressBar
              now={
                //@ts-ignore
                (parseInt(countryData.todayDeaths) /
                  //@ts-ignore
                  parseInt(worldData.todayDeaths)) *
                300
              }
            />
          </Card.Title>
        </Card.Body>
      </Card>
      <Card
        text="white"
        bg="success"
        style={{ width: "18rem", position: "fixed", top: 200, left: 1150 }}
      >
        <Card.Header>Misc</Card.Header>
        <Card.Body>
          <Card.Title>
            <h5
              style={
                colorTheme === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              Recovered: {countryData.recovered}
            </h5>
            <ProgressBar
              now={
                //@ts-ignore
                (parseInt(countryData.recovered) /
                  //@ts-ignore
                  parseInt(worldData.recovered)) *
                300
              }
            />

            <h5
              style={
                colorTheme === "dark" ? { color: "white" } : { color: "black" }
              }
            >
              Tests: {countryData.totalTests}
            </h5>
            <ProgressBar
              now={
                //@ts-ignore
                (parseInt(countryData.recovered) /
                  //@ts-ignore
                  parseInt(worldData.recovered)) *
                300
              }
            />
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;