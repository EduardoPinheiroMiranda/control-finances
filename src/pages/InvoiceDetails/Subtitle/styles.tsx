import { CustomText } from "@/components/CustomText";
import styled from "styled-components/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme } from "styled-components";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    flex: 1;
    display: flex;
    gap: 30px;
`;

export const SectionSubtitles = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const UL = styled.View`
    width: 170px;
    display: flex;
    gap: 10px;
`;

export const LI = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const TextArea = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled(CustomText)`
    font-size: 14px;
`;

export const SectionButton = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Buttles = styled(FontAwesome).attrs(({theme}: ThemeTypes) => ({
	name: "circle",
	size: 5,
	color: theme.colors.FONT_COLOR_PRIMARY,
}))``;