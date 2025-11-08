import styled from "styled-components/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components/native";


type ThemeTypes = {
    theme: DefaultTheme
}


export const Container = styled.View.attrs({
	elevation: 5
})`
	background-color: ${({theme}: ThemeTypes) => theme.colors.PRIMARY};

    height: 60px;
	width: 100%;

	display: flex;
	justify-content: center;
	
	padding: 0 20px;
`;

export const SectionTitle = styled.View`

	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
`;

export const Text = styled(CustomText)`
    font-size: 20px;
	color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const MenuIcon = styled(FontAwesome6).attrs(({theme}: ThemeTypes) => ({
	name: "arrow-left",
	size: 20,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;
