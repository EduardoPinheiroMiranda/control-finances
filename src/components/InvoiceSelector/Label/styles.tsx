import styled from "styled-components/native";
import { CustomText } from "../../CustomText";


export const Container = styled.View``;

export const TextLabel = styled(CustomText)`
    font-size: 16px;
    font-weight: 500;
    margin-right: 20px;
    color: ${({color}: {color: string}) => color};

    text-align: center;
    width: 85px;
    height: 20px;
`;