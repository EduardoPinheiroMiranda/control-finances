import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}

export const Container = styled.View`
    flex: 1;

    padding: 20px 0;
    border-bottom-width: 2px;
    border-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_SECONDARY};
`;

export const Title = styled(CustomText)`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
    margin-left: 20px;
`;
