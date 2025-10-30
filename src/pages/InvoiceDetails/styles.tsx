import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    padding: 20px;
`;

export const DescriptionInvoice =  styled.View`
    display: flex;
    gap: 30px;
`;

export const Header = styled.View`
    display: flex;
    gap: 10px;
`;

export const TextHeader = styled(CustomText)`
    font-size: 16px;
`;

export const SectionValues = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const TextValueInvoice = styled(CustomText)`
    font-size: 40px;
`;

export const DescriptionValues = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;