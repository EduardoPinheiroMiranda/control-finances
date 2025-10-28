import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
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
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 20px;
`;