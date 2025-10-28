import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeTypes {
    theme: DefaultTheme
}


export const Container = styled(SafeAreaView)`
    background-color:  ${({theme}: ThemeTypes) => theme.colors.BACKGROUND_PRIMARY};
    
    flex: 1;
`;