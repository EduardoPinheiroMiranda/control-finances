import { StyleProp, TextProps, TextStyle } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface CustonTextProps extends TextProps{
    children: React.ReactNode;
    styles?: StyleProp<TextStyle>
}


export function CustomText({children, styles, ...rest}: CustonTextProps){

	return(
		<Text style={styles} {...rest}>
			{children}
		</Text>
	);
}


interface ThemeType {
	theme: DefaultTheme
}

const Text = styled.Text`
	color: ${({theme}: ThemeType) => theme.colors.defaultFontColor};
    font-family: "Roboto_400Regular";
`;