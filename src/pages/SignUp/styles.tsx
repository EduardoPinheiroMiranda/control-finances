import { CustomText } from "@/components/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
import { Dimensions } from "react-native";


const { height } = Dimensions.get("screen");


type ThemeType = {
    theme: DefaultTheme
}


export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({theme}: ThemeType) => theme.colors.BACKGROUND_PRIMARY};
`;

export const Header = styled.View`
    background: ${({theme}: ThemeType) => theme.colors.PRIMARY};

    width: 100vw;
    height: ${height < 1000 ? "200px" : "350px"};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius:  0 0 50% 50%;
`;

export const Form = styled.View`
    margin: ${height < 1000 ? "30px 20px 0 20px" : "50px 0 40px 0"};

    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ButtonSection = styled.View`
    flex: 1;
    margin: ${height < 1000 ? "40px 0 40px 0" : "100px 0 40px 0"};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

export const CreateAccount = styled(CustomText)`
    font-size: 16px;
    color: ${({theme}: ThemeType) => theme.colors.SECONDARY};
`;