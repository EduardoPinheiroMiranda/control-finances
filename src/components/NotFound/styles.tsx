import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DefaultTheme } from "styled-components";


interface ThemeType {
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
    color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_THIRD}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}: ThemeType) => ({
	name: "error-outline",
	size: 20,
	color: theme.colors.BACKGROUND_THIRD
}))``;