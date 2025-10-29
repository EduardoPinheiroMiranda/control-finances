import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled.View`
    flex: 1;
    display: flex;
`;

export const SectionToClose = styled.TouchableOpacity`
    flex: 1;
`;

export const Section = styled.View.attrs({ elevation: 5 })`
    background-color: ${({theme}: ThemeTypes) => theme.colors.WHITE};
    

    max-height: 60%;
    min-height: 50%;
    width: 100%;
    
    padding-top: 20px;
    border-radius: 20px 20px 0 0;
`;

export const SectionButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 20px;
`;