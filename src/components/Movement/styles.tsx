import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import { CustomText } from "../CustomText";


interface ThemeTypes {
    theme: DefaultTheme
}

export const Container = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    padding: 0 20px;
    border-bottom-width: 1px;
    border-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_SECONDARY};
`;

export const Description = styled.View`
    flex: 1;
`;

export const Section = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextTop = styled(CustomText)`
    font-size: 16px;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const TextBottom = styled(CustomText)`
    font-size: 14px;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;