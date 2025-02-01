import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";


export function PieChart({data}){


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
                    d="M26.5125 19.8625C25.7173 21.7431 24.4735 23.4003 22.8899 24.6891C21.3062 25.978 19.431 26.8593 17.4281 27.256C15.4251 27.6527 13.3555 27.5527 11.4002 26.9648C9.44485 26.3768 7.6633 25.3188 6.21129 23.8833C4.75928 22.4478 3.68103 20.6784 3.07081 18.7299C2.46059 16.7814 2.33697 14.7131 2.71076 12.7058C3.08456 10.6985 3.94439 8.81329 5.21507 7.21504C6.48576 5.6168 8.12862 4.35415 10 3.53751" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5V15H27.5Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}

