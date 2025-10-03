import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeType{
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_PRIMARY};
   
    width: 100%;
    height: 15px;

    border-radius: 15px;
`;

export const Progress = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.SECONDARY};
    width: ${({width}:{width: number}) => `${width}%`};
    height: 15px;

    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Marked = styled.View.attrs({elevation: 1})`
    background-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_SECONDARY};
   
    width: 25px;
    height: 25px;

    border-radius: 20px;
`;
