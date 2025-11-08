import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme,
    date: string
}


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    padding: 0 20px;
`;

export const Form = styled.View`
    display: flex;
    gap: 30px;
    padding-top: 30px;
`;

export const PaymentSection = styled.View`
    display: flex;
    gap: 30px;
`;

export const PriceSection = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

export const ButtonSection = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 20px;
`;

export const SelectDate = styled.View``;

export const Text = styled(CustomText)`
    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_THIRD};
    font-size: 14px;
    margin-bottom: 5px;
`;

export const TextInput = styled.View`
    height: 60px;

    color: ${({theme}: ThemeTypes) => theme.colors.FONT_COLOR_PRIMARY};

    border: 1px solid ${({theme}: ThemeTypes) => theme.colors.INPUT_BORDER};
    border-radius: 10px;

    padding: 15px 20px;
`;

export const Placeholder = styled(CustomText)`
    color: ${({theme, date}: ThemeTypes) => !date ? theme.colors.PLACEHOLDER : theme.colors.FONT_COLOR_PRIMARY};
    font-size: 16px;
`;