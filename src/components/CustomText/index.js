import { Text } from "react-native";
import { defaultPageStyle } from "../../themes/stylesDefault";


export function CustomText({children, style, ...rest}){

    return(
        <Text style={[defaultPageStyle.text, style]} {...rest}>
            {children}
        </Text>
    );
}