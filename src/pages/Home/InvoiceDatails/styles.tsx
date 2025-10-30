import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    padding: 20px;
    border-bottom-width: 2px;
    border-bottom-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_SECONDARY};
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextTitle = styled(CustomText)`
    font-size: 20px;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const TextExpired = styled(CustomText)`
    font-size: 16px;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const TextValue = styled(CustomText)`
    font-size: 24px;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const Section = styled.View`
    margin-top: 30px;
    display: flex;
    gap: 10px;
`;