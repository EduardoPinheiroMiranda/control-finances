import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";


type ThemeType = {
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: #0000;

    flex: 1;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.ActivityIndicator`
    color: ${({theme}: ThemeType) => theme.colors.PRIMARY};
    size: 40px;
`;