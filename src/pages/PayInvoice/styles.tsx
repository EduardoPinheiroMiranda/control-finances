import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
`;

export const Header = styled.View`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    border-bottom-width: 2px;
    border-bottom-color: ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_SECONDARY};
`;
export const TextHeaderLabel = styled(CustomText)`
    font-size: 16px;
    width: 100%;
`;
export const TextHeaderValue = styled(CustomText)`
    font-size: 32px
`;
