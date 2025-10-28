import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import { DefaultTheme } from "styled-components";
import { Picker } from "@react-native-picker/picker";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    display: flex;
    gap: 5px;
`;

export const Label = styled(CustomText)`
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_THIRD};
    font-size: 14px;
`;

export const Section = styled.View`
    width: 100%;
    height: 60px;

    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};

    border: 1px solid ${({theme}: ThemeTypes) => theme.colors.INPUT_BORDER};
    border-radius: 10px;

    padding: 0 10px;
`;

export const PickerSelect = styled(Picker)`
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};
`;