import { StyleProp, TextProps, TextStyle } from "react-native";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


interface PropsTypes extends TextProps{
    children: React.ReactNode;
    styles?: StyleProp<TextStyle>
}


export function CustomText({children, styles, ...rest}: PropsTypes){

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
	color: ${({theme}: ThemeType) => theme.colors.FONT_COLOR_PRIMARY};
    font-family: "Roboto_400Regular";
`;