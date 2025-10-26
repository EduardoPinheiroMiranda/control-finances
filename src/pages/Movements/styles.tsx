import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface ThemeType {
    theme: DefaultTheme
}


export const Container = styled(SafeAreaView)`
    background-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_PRIMARY};
    flex: 1;
    


    /* border: 1px solid red; */
`;