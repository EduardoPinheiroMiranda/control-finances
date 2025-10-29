import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import { CustomText } from "../CustomText";


type ThemeTypes = {
    theme: DefaultTheme
}

export const Container = styled.View`
    display: flex;
    gap: 5px;
`;

export const Text = styled(CustomText)`
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_THIRD};
    font-size: 14px;
`;

export const TextInput = styled.TextInput.attrs(({theme}: ThemeTypes) => ({
	placeholderTextColor: theme.colors.PLACEHOLDER
}))`
    min-height: 60px;

    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
    font-size: 16px;

    border: 1px solid ${({theme}: ThemeTypes) => theme.colors.INPUT_BORDER};
    border-radius: 10px;

    padding: 15px 20px;
`;