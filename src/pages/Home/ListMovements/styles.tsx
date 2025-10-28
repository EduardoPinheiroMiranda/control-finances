import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    flex: 1;
    margin: 20px 0 50px 0;
`;

export const Section = styled.View`
    
`;

export const TextTitle = styled(CustomText)`
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
    font-size: 20px;
    font-weight: 500;

    margin: 10px 20px 20px 20px;

`;


