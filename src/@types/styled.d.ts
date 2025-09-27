import "styled-components";


declare module "styled-components" {
  
  export interface DefaultTheme {
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

      ALERT: string
    }
  }
}