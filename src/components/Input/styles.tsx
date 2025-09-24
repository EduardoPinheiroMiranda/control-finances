import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import { CustomText } from "../CustomText";


interface ThemeType {
    theme: DefaultTheme
}

export const Container = styled.View`
    display: flex;
    gap: 5px;
`;

export const Text = styled(CustomText)`
    color: ${({theme}: ThemeType) => theme.colors.labelColor};
    font-size: 14px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 60px;

    color: ${({theme}: ThemeType) => theme.colors.defaultFontColor};

    border: 1px solid ${({theme}: ThemeType) => theme.colors.inputBorder};
    border-radius: 10px;

    padding: 15px 20px;
`;