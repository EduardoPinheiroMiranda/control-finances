import styled from "styled-components/native";
import { CustomText } from "../CustomText";
import Octicons from "@expo/vector-icons/Octicons";
import { DefaultTheme } from "styled-components";


type ThemeType = {
    theme: DefaultTheme
}

interface ButtonProps {
    quantity: number,
    position: string
}


export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Body = styled.View`
    background-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_PRIMARY};
    width: 372px;
    
    border-radius: 20px;
    border-radius: 20px;
`;

export const Title = styled.View`
    background-color: ${({theme, alert}:{theme: DefaultTheme, alert: boolean}) => {
		return alert ? theme.colors.ALERT : theme.colors.SECONDARY;
	}};

    height: 100px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    border-radius: 20px 20px 0 0 ;
`;

export const AlertIcon = styled(Octicons).attrs({name:"alert-fill", size: 50, color: "white"})``;

export const TextTitle = styled(CustomText)`
    font-size: 32px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_SECONDARY};
    font-weight: bold;
`;

export const Message = styled.View`
    padding: 20px;
    border: 1px solid ${({theme}: ThemeType) => theme.colors.BACKGROUND_SECONDARY};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextMessage = styled(CustomText)`
    font-size: 16px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
`;

export const ButtonSection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1px;

    border-radius: 0 0 20px 20px;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({theme}: ThemeType) => theme.colors.BACKGROUND_THIRD};
    
    height: 50px;
    width: ${({quantity}: ButtonProps) => quantity === 1 ? "100%" : "50%"};

    display: flex;
    justify-content: center;
    align-items: center;

    ${({quantity}: ButtonProps) => quantity === 1 && `
        border-radius: 0 0 20px 20px;
    `}

    ${({quantity, position}: ButtonProps) => {
		if(quantity > 1 && position === "left"){
			return "border-bottom-left-radius: 20px;";
		}
	}}

     ${({quantity, position}: ButtonProps) => {
		if(quantity > 1 && position === "right"){
			return "border-bottom-right-radius: 20px;";
		}
	}}
`;

export const TextButton = styled(CustomText)`
    font-size: 20px;
    color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_THIRD};
`;