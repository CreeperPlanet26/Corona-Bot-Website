import CountryDataType from "./countryData";
import { colorThemeType } from "./colorTheme";

export default interface CardProps {
  countryData: CountryDataType;
  worldData: CountryDataType;
  colorTheme: colorThemeType;
}
