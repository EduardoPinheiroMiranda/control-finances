import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    flex: 1;
    display: flex;
    justify-content: space-between;
`;

export const Form = styled.View`
    display: flex;
    gap: 30px;
    padding: 30px 20px;
`;

export const SectionButton = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;