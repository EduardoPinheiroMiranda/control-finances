import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import { CustomText } from "../CustomText";


type ThemeType = {
    theme: DefaultTheme
}

export const Container = styled.View`
    display: flex;
    gap: 5px;
`;

export const Text = styled(CustomText)`
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_THIRD};
    font-size: 14px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 60px;

    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};

    border: 1px solid ${({theme}: ThemeType) => theme.colors.INPUT_BORDER};
    border-radius: 10px;

    padding: 15px 20px;
`;