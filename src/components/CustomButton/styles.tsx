import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components";


type ThemeTypes = {
    theme: DefaultTheme;
    alert?: boolean;
    width?: number;
}


export const Button = styled.TouchableOpacity`

    background-color: ${({theme, alert}: ThemeTypes) => !alert ? theme.colors.SECONDARY : theme.colors.ALERT};
    
    height: 60px;
    width: ${({width}: ThemeTypes) => width ? `${width}px` : "300px"};

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Text = styled(CustomText)`
    font-size: 20px;
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_SECONDARY};
`;