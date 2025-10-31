import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View``;

export const Header = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_SECONDARY};
    height: 40px;
    padding: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled(CustomText)` font-size: 16px`;