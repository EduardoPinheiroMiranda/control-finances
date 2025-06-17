import React from "react";
import { View } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect} from "react-native-svg";


export function CheckboxSelected({data}){


    return(
        <View>
            <Svg 
                width={data.size} 
                height={data.size} 
                viewBox="0 0 30 30"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <G clip-path="url(#clip0_231_1148)">
                    <Path 
                        d="M22.5 0.625H7.5C3.70304 0.625 0.625 3.70304 0.625 7.5V22.5C0.625 26.297 3.70304 29.375 7.5 29.375H22.5C26.297 29.375 29.375 26.297 29.375 22.5V7.5C29.375 3.70304 26.297 0.625 22.5 0.625Z" 
                        fill="#1F8FFF" 
                        stroke="#1F8FFF" 
                        stroke-width="1.5"
                    />
                    <Path 
                        d="M24.3684 8.36598C24.134 8.13164 23.8161 8 23.4846 8C23.1532 8 22.8353 8.13164 22.6009 8.36598L12.2346 18.7322L8.11839 14.616C7.88264 14.3883 7.56688 14.2623 7.23914 14.2651C6.91139 14.268 6.59788 14.3994 6.36612 14.6312C6.13436 14.863 6.0029 15.1765 6.00005 15.5042C5.9972 15.832 6.12319 16.1477 6.35089 16.3835L11.3509 21.3835C11.5853 21.6178 11.9032 21.7495 12.2346 21.7495C12.5661 21.7495 12.884 21.6178 13.1184 21.3835L24.3684 10.1335C24.6027 9.89907 24.7344 9.58119 24.7344 9.24973C24.7344 8.91828 24.6027 8.60039 24.3684 8.36598Z" 
                        fill="#FAFAFA"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_231_1148">
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
