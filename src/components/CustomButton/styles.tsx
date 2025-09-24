import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components";


interface ThemeType {
    theme: DefaultTheme
}


export const Button = styled.TouchableOpacity`

    background-color: ${({theme}: ThemeType) => theme.colors.SECONDARY};
    
    height: 60px;
    width: 300px;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Text = styled(CustomText)`
    font-size: 20px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_SECONDARY};
`;