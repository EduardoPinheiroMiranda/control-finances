import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DefaultTheme } from "styled-components";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;
`;

export const Section = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled(CustomText)`
    color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_THIRD}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}: ThemeTypes) => ({
	name: "error-outline",
	size: 20,
	color: theme.colors.BACKGROUND_THIRD
}))``;