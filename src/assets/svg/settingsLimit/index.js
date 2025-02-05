import React from "react";
import { View } from "react-native";
import { Svg, Path} from "react-native-svg";


export function SettingsLimit({data}){


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
                    d="M15 9.384H27" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M3 9.384H5.4" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M24.6 20.184H27" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M3 20.184H15" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M10.2 14.184C12.8509 14.184 15 12.0349 15 9.38401C15 6.73305 12.8509 4.58401 10.2 4.58401C7.54906 4.58401 5.40002 6.73305 5.40002 9.38401C5.40002 12.0349 7.54906 14.184 10.2 14.184Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M19.8 24.984C22.4509 24.984 24.6 22.8349 24.6 20.184C24.6 17.5331 22.4509 15.384 19.8 15.384C17.1491 15.384 15 17.5331 15 20.184C15 22.8349 17.1491 24.984 19.8 24.984Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}
