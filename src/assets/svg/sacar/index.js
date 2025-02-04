import React from "react";
import { View } from "react-native";
import { Svg, Path} from "react-native-svg";


export function Sacar({data}){


    return(
        <View>
            <Svg 
            width={data.size}
            height={data.size} 
            viewBox="0 0 31 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    d="M12.0416 17.1875C12.0416 18.4 12.9791 19.375 14.1291 19.375H16.4791C17.4791 19.375 18.2916 18.525 18.2916 17.4625C18.2916 16.325 17.7916 15.9125 17.0541 15.65L13.2916 14.3375C12.5541 14.075 12.0541 13.675 12.0541 12.525C12.0541 11.475 12.8666 10.6125 13.8666 10.6125H16.2166C17.3666 10.6125 18.3041 11.5875 18.3041 12.8" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M15.1666 9.375V20.625" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M27.6666 15C27.6666 21.9 22.0666 27.5 15.1666 27.5C8.26663 27.5 2.66663 21.9 2.66663 15C2.66663 8.1 8.26663 2.5 15.1666 2.5" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M27.6666 7.5V2.5H22.6666" 
                    stroke={data.color} 
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M21.4166 8.75L27.6666 2.5" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
