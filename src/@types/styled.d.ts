import "styled-components";


type ThemeType = {
  colors: {

    PRIMARY: string,
    SECONDARY: string,

    BACKGROUND: string,

    FONT_COLOR_PRIMARY: string,
    FONT_COLOR_SECONDARY: string
    FONT_COLOR_THIRD: string,

    INPUT_BORDER: string,
  }
};


declare module "styled-components" {
  
  export type DefaultTheme = ThemeType
}