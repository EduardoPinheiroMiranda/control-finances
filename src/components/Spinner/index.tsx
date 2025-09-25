import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";


export function Spinner(){

	return( <Loading/> );
}


interface ThemeType {
    theme: DefaultTheme
}


const Loading = styled.ActivityIndicator`
    background-color: ${({theme}: ThemeType) => theme.colors.PRIMARY};
    size: 24px;
`;