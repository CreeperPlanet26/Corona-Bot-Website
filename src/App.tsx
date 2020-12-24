import fetch from "node-fetch";
import React, { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/card";
import ListBox from "./components/listBox";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import CountryDataType from "./interfaces/countryData";
import { colorThemeType } from "./interfaces/colorTheme";

const App: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryDataType>({});

  const [worldData, setWorldData] = useState<CountryDataType>({});
  const [allCountries, setAllCountries] = useState<Array<CountryDataType>>([]);
  const [theme, setTheme] = useState<colorThemeType>("dark");
  if (theme === "dark") document.body.style.backgroundColor = "#212529";
  if (theme === "light") document.body.style.backgroundColor = "white";

  const fetchAllCountries = async () => {
    const responce = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries/`
    );
    const allCountriesJSON = await responce.json();
    setAllCountries((s) => (s = allCountriesJSON));
  };

  useEffect(() => {
    fetchAllCountries();
    fetchWorldData();
  }, []);

  const fetchData = async (searchQuery: string) => {
    const parsed = searchQuery.replace(/\s+/gi, "%20");
    const responce = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries/${parsed}`
    );
    const countryDataJSON = await responce.json();
    setCountryData((s) => (s = countryDataJSON));
  };

  const fetchWorldData = async () => {
    const responce = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries/world`
    );
    const worldDataJSON = await responce.json();
    setWorldData((s) => (s = worldDataJSON));
  };

  const changeThemeState = (sliderTheme: string) => {
    console.log(theme, sliderTheme, "before");
    if (sliderTheme === "dark") setTheme((s) => (s = "dark"));
    if (sliderTheme === "light") setTheme((s) => (s = "light"));
    console.log(theme, sliderTheme, "after");
  };

  return (
    <div className="App">
      <NavBar colorTheme={theme} onThemeChange={changeThemeState} />
      <h1
        style={{ marginTop: "1rem" }}
        className={theme === "dark" ? "light" : "dark"}
      >
        Corona Stats For: {countryData.country}
      </h1>

      <CardComponent
        colorTheme={theme}
        countryData={countryData}
        worldData={worldData}
      />

      <ListBox
        colorTheme={theme}
        allCountries={allCountries}
        onFetch={fetchData}
      />

      <SearchBar onFetch={fetchData} />
    </div>
  );
};

export default App;
