import CountryDataType from "./countryData";
import { colorThemeType } from "./colorTheme";

export default interface ListBoxProps {
  allCountries: Array<CountryDataType>;
  colorTheme: colorThemeType;
  onFetch: (searchQuery: string) => void;
}
