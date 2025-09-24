import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeType {
    theme: DefaultTheme
}


export const Container = styled(SafeAreaView)`
    height: 100%;
    background: ${({theme}: ThemeType) => theme.colors.pageBackground};
`;

export const Header = styled.View`
    background: ${({theme}: ThemeType) => theme.colors.primary};

    width: 100vw;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius:  0 0 40% 40%;
`;

export const Form = styled.View`
    margin: 80px 20px 0 20px;
`;