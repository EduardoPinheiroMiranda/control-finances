import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";


export function RightArrow({data}){


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
                    d="M18.8719 15.9869C19.66 15.2727 19.6494 14.0971 18.8458 13.394L9.78658 5.46712C9.5268 5.23983 9.13197 5.26614 8.90465 5.52594C8.67734 5.78569 8.70368 6.18055 8.96345 6.40787L18.0227 14.3347C18.2638 14.5457 18.2666 14.8486 18.0325 15.0607L8.95531 23.2869C8.69955 23.5187 8.68009 23.914 8.91189 24.1697C9.14369 24.4255 9.53893 24.4449 9.79472 24.2131L18.8719 15.987L18.8719 15.9869Z" 
                    fill={data.color}
                />
            </Svg>
        </View>
    );
}

