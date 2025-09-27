import "styled-components";


type ThemeType = {
  colors: {

    PRIMARY: string,
    SECONDARY: string,

    BACKGROUND_PRIMARY: string,
    BACKGROUND_SECONDARY: string,
		BACKGROUND_THIRD: string,

    FONT_COLOR_PRIMARY: string,
    FONT_COLOR_SECONDARY: string
    FONT_COLOR_THIRD: string,

    INPUT_BORDER: string,

    ALERT: STRING
  }
};


declare module "styled-components" {
  
  export type DefaultTheme = ThemeType
}