import React from "react";
import { View } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect} from "react-native-svg";


export function CheckboxNull({data}){


    return(
        <View>
            <Svg 
                width={data.size} 
                height={data.size} 
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <G clip-path="url(#clip0_231_1146)">
                    <Path 
                        d="M22.5 0.625H7.5C3.70304 0.625 0.625 3.70304 0.625 7.5V22.5C0.625 26.297 3.70304 29.375 7.5 29.375H22.5C26.297 29.375 29.375 26.297 29.375 22.5V7.5C29.375 3.70304 26.297 0.625 22.5 0.625Z" 
                        stroke="#4F6780" 
                        stroke-width="1.5"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_231_1146">
                        <Rect 
                            width={data.size} 
                            height={data.size} 
                            fill="white"
                        />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}
