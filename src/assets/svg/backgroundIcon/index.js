import React from "react";
import { View } from "react-native";
import {Svg, Path } from "react-native-svg";


export default function BackgroundIcon({data}){

    
    return(
        <View>
            <Svg 
            width={data.width} 
            height={data.height} 
            viewBox="0 0 30 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M13.9999 39.9672V50H15.9999V39.9672C23.818 39.4526 30 32.9483 30 25C30 17.0517 23.818 10.5474 15.9999 10.0328V0H13.9999V10.0328C6.18193 10.5474 0 17.0518 0 25C0 32.9482 6.18193 39.4526 13.9999 39.9672Z" 
                    fill="#F1F1F1"
                />
            </Svg>
        </View>
    );
}
