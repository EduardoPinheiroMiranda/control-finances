import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    flex: 1;
`;

export const Spiner = styled.ActivityIndicator.attrs(({theme}: ThemeTypes) => ({
	color: theme.colors.SECONDARY,
	size: 20,
}))``;