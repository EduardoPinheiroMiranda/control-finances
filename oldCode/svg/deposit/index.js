import React from "react";
import { View } from "react-native";
import { Svg, Path} from "react-native-svg";


export function Deposit({data}){


    return(
        <View>
            <Svg 
                width={data.size}
                height={data.size}
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    d="M11.875 17.1875C11.875 18.4 12.8125 19.375 13.9625 19.375H16.3125C17.3125 19.375 18.125 18.525 18.125 17.4625C18.125 16.325 17.625 15.9125 16.8875 15.65L13.125 14.3375C12.3875 14.075 11.8875 13.675 11.8875 12.525C11.8875 11.475 12.7 10.6125 13.7 10.6125H16.05C17.2 10.6125 18.1375 11.5875 18.1375 12.8"
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M15 9.375V20.625" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M27.5 15C27.5 21.9 21.9 27.5 15 27.5C8.1 27.5 2.5 21.9 2.5 15C2.5 8.1 8.1 2.5 15 2.5" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M21.25 3.75V8.75H26.25" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path d="M27.5 2.5L21.25 8.75" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
