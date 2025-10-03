import { CustomText } from "@/components/CustomText";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";
// icon
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";


interface ThemeType {
    theme: DefaultTheme
}


export const Container = styled.View`

    background-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_PRIMARY};

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    padding: 20px 0;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_SECONDARY};

    margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.7,
})`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const SectionIcon = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.PRIMARY};

    width: 50px;
    height: 50px;

    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled(CustomText)`
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
    font-size: 14px;
    width: 80px;
    text-align: center;
`;

export const IconBag = styled(Feather).attrs(({theme}: ThemeType) => ({
	name: "shopping-bag",
	size: 30,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;

export const IconDollar = styled(Feather).attrs(({theme}: ThemeType) => ({
	name: "dollar-sign",
	size: 30,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;

export const IconInvoice = styled(MaterialCommunityIcons).attrs(({theme}: ThemeType) => ({
	name: "invoice-list-outline",
	size: 30,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;

