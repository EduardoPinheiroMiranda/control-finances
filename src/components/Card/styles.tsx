import styled from "styled-components/native";
import { CustomText } from "../CustomText";


export const Container = styled.View.attrs({elevation: 5})`
    width: 180px;
    height: 100px;

    border-radius: 10px;
    padding: 10px 15px;
    margin: 0 7.5px;

    display: flex;
    justify-content: space-between;
`;

export const Section = styled.View`
    width: 100%;

    display: flex;
    justify-content: space-between;
`;

export const TextCardName = styled(CustomText)`
    font-size: 14px;
    font-weight: 500;

    width: 100%;
    text-align: right;
`;

export const TextExpired = styled(CustomText)`
    font-size: 10px;
`;

export const SectionValues = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextValue = styled(CustomText)`
    font-size: 14px;
`;