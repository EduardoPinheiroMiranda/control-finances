import { CustomText } from "@/components/CustomText";
import styled from "styled-components/native";


export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const Text = styled(CustomText)`
    font-size: 16px;
    font-weight: 400;
`;

export const Label = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`;