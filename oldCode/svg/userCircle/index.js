import React from "react";
import { View } from "react-native";
import { Svg, Path} from "react-native-svg";


export function UserCircle({data}){


    return(
        <View>
            <Svg 
                width={data.size} 
                height={data.size} 
                viewBox="0 0 50 50" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    d="M25.2499 26.625C25.1041 26.6042 24.9166 26.6042 24.7499 26.625C21.0832 26.5 18.1665 23.5 18.1665 19.8125C18.1665 16.0416 21.2082 12.9791 24.9999 12.9791C28.7707 12.9791 31.8332 16.0416 31.8332 19.8125C31.8124 23.5 28.9166 26.5 25.2499 26.625Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M39.0416 40.3752C35.3332 43.771 30.4166 45.8335 24.9999 45.8335C19.5833 45.8335 14.6666 43.771 10.9583 40.3752C11.1666 38.4168 12.4166 36.5002 14.6458 35.0002C20.3541 31.2085 29.6874 31.2085 35.3541 35.0002C37.5832 36.5002 38.8332 38.4168 39.0416 40.3752Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M25.0001 45.8334C36.5059 45.8334 45.8334 36.5059 45.8334 25C45.8334 13.4941 36.5059 4.16669 25.0001 4.16669C13.4941 4.16669 4.16675 13.4941 4.16675 25C4.16675 36.5059 13.4941 45.8334 25.0001 45.8334Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
