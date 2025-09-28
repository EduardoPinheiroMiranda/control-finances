import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components/native";


type ThemeType = {
    theme: DefaultTheme
}


export const Container = styled.View.attrs({
	elevation: 5
})`
	background-color: ${({theme}: ThemeType) => theme.colors.PRIMARY};

    height: 60px;
	width: 100%;

	display: flex;
	justify-content: center;
	
	padding: 0 20px;
`;

export const SectionTitle = styled.View`

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Text = styled(CustomText)`
    font-size: 20px;
	color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const MenuIcon = styled(Feather).attrs(({theme}: ThemeType) => ({
	name: "menu",
	size: 30,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;
