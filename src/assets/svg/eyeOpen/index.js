import React from "react";
import { View } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect} from "react-native-svg";


export function EyeOpen({data}){


    return(
        <View>
            <Svg 
                width={data.size} 
                height={data.size}
                viewBox="0 0 31 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <G clip-path="url(#clip0_177_6)">
                    <Path 
                        d="M4.31344 19.875C5.25094 22.6875 8.06344 27.375 15.5634 27.375C23.0634 27.375 25.8759 22.6875 26.8134 19.875M29.625 18C29.625 16.125 25.8759 6.75 15.5625 6.75M15.5625 6.75C5.25094 6.75 1.5 16.125 1.5 18M15.5625 6.75V3M20.4148 3.639L19.4773 7.13494M24.9375 5.51222L23.0616 8.75878M28.8202 8.49131L26.169 11.1416M10.7084 3.639L11.645 7.13494M6.18656 5.51222L8.06156 8.75972M2.30381 8.49131L4.95506 11.1426M15.5634 11.4375C12.4575 11.4375 9.93844 13.9566 9.93844 17.0625C9.93844 20.1684 12.4575 22.6875 15.5634 22.6875C18.6694 22.6875 21.1884 20.1684 21.1884 17.0625M20.4788 14.3315C19.9688 13.4146 19.2104 12.6571 18.2945 12.1471M17.4384 17.0625C17.4384 16.0275 16.5984 15.1875 15.5634 15.1875C14.5284 15.1875 13.6884 16.0275 13.6884 17.0625C13.6884 18.0975 14.5284 18.9375 15.5634 18.9375C16.5984 18.9375 17.4384 18.0975 17.4384 17.0625Z" 
                        stroke={data.color}
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_177_6">
                        <Rect
                            width="30" 
                            height="30" 
                            fill="white" 
                            transform="translate(0.5)"
                        />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}
