import "styled-components";


type ThemeType = {
  colors: {
    pageBackground: string,

    defaultFontColor: string,
    labelColor: string,

    primary: string,
    secondary: string,
    
    inputBorder: string
  }
};


declare module "styled-components" {
  
  export type DefaultTheme = ThemeType
}