import { CustomText } from "@/components/CustomText";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { DefaultTheme } from "styled-components";


type ThemeType = {
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.PRIMARY};
    height: 80px;
    width: 100%;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
`;

export const SectionLogo = styled.View`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const TextNameUser = styled(CustomText)`
    font-size: 18;
    font-weight: 700;
`;

export const MenuIcon = styled(Feather).attrs(({theme}: ThemeType) => ({
	name: "menu",
	size: 30,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;
