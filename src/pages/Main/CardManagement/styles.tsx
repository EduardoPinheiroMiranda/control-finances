import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";
import { FlatList } from "react-native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    flex: 1;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 20px 20px 20px;
`;

export const Title = styled(CustomText)`
    font-size: 20px;
    font-weight: 500;
`;

export const PlusIcon = styled(Entypo).attrs(({theme}: ThemeTypes) => ({
	name: "plus",
	size: 30,
	color: theme.colors.FONT_COLOR_PRIMARY
}))``;

export const List = styled(FlatList)`
    
`;