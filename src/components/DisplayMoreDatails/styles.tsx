import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { DefaultTheme } from "styled-components";


interface ThemeType {
    theme: DefaultTheme
}


export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextButton = styled(CustomText)`
    font-size: 14px;
    color: ${({theme}: ThemeType) => theme.colors.SECONDARY};
`;

export const IconArrowRight = styled(FontAwesome6).attrs(({theme} : ThemeType) => ({
	name: "arrow-right-long",
	color: theme.colors.SECONDARY,
	size: 20
}))``;