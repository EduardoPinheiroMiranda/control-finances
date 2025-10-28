import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";


type ThemeTypes = {
    theme: DefaultTheme
}


export const Container = styled.View`
    background: transparent;

    flex: 1;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({theme}: ThemeTypes) => ({
	color: theme.colors.SECONDARY,
	size: 40,
}))``;