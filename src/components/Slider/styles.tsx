import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import { CustomText } from "../CustomText";


interface ThemeTypes{
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
   
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const Background = styled.View`
    height: 10px;
    width: 85%;

    background-color: ${({theme}: ThemeTypes) => theme.colors.INPUT_BORDER};
    border-radius: 10px;
`;

export const Progress = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.SECONDARY};
    width: ${({width}:{width: number}) => `${width}%`};
    height: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Marked = styled.View.attrs({elevation: 2})`
    background-color: ${({theme}: ThemeTypes) => theme.colors.WHITE};
    width: 20px;
    height: 20px;
    border-radius: 20px;
`;

export const Text = styled(CustomText)`
    font-size: 20px;
`;