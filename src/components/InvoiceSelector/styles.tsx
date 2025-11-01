import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View``;

export const Section = styled.View`
    background-color: ${({color}: {color: string}) => color};

    margin: 20px;
    padding: 20px;

    display: flex;
    gap: 20px;

    border-radius: 20px;
`;

export const TextValue = styled(CustomText)`
    font-size: 36px;
    font-weight: 500;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_SECONDARY};
    text-align: center;
    width: 100%;
`;

export const Description = styled.View`
    display: flex;
    gap: 10px;
`;

export const Line = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextDescription = styled(CustomText)`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_SECONDARY};
`;