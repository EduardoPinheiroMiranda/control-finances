import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";


export function TagValue({data}){


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
                    d="M24.3751 11.6375L12.3813 23.6187V25.4937H14.2563L26.2501 13.5187L24.3751 11.6437" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M23.2188 12.7812L25.0938 14.6562" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M3.88135 23.125C4.50964 23.1283 5.11118 23.3798 5.55487 23.8246C5.99856 24.2695 6.24846 24.8717 6.2501 25.5" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M3.88135 17.0125C6.13237 17.0125 8.2912 17.9067 9.88292 19.4984C11.4746 21.0901 12.3688 23.249 12.3688 25.5" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M3.88135 20.125C5.30746 20.125 6.67526 20.6911 7.68426 21.6989C8.69326 22.7067 9.26094 24.0739 9.2626 25.5" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M10.7313 8.625C11.3389 8.625 11.8313 8.13251 11.8313 7.525C11.8313 6.91749 11.3389 6.425 10.7313 6.425C10.1238 6.425 9.63135 6.91749 9.63135 7.525C9.63135 8.13251 10.1238 8.625 10.7313 8.625Z" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M17.5001 22.25V25.5H3.88135V8.96875L10.6938 4.5L17.5001 8.96875V18.4563" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M14.2063 21.7937L16.0875 23.675" 
                    stroke={data.color}
                    stroke-width="1.5"
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
