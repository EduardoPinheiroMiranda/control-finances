import { CustomText } from "@/components/CustomText";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeType {
    theme: DefaultTheme
}

export const Container = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.PRIMARY};
    padding: 20px;
    border-radius: 0 0 20px 20px;

    margin-bottom: 30px;
`;

export const TextLabel = styled(CustomText)`
    font-size: 14px;
    margin-bottom: 10px;
`;

export const SectionValues = styled.View`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextValue = styled(CustomText)`
    font-size: 28px;
`;

