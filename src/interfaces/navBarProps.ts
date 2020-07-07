import { colorThemeType } from "./colorTheme";

export interface NavBarProps {
  onThemeChange: (sliderTheme: string) => void;
  colorTheme: colorThemeType;
}
