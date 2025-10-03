import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeType {
    theme: DefaultTheme
}


export const Container = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.PRIMARY};
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const TextTitle = styled(CustomText)`
    font-size: 20px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const TextExpired = styled(CustomText)`
    font-size: 16px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;



export const SectionValues = styled.View``;

export const LabelValues = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const TextValue = styled(CustomText)`
    font-size: 24px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const TextSpent = styled(CustomText)`
    font-size: 32px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const Informations = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 30px 0;
`;

export const Descriptions = styled.View`
    width: 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextDescription = styled(CustomText)`
    font-size: 16px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;

