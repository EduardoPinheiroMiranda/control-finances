import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";


export function CardEdit({data}){


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
                    d="M2.49512 10.625H14.3701" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round"
                     stroke-linejoin="round"/>
                <Path 
                    d="M7.49512 20.625H9.99512" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M13.1201 20.625H18.1201" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M27.4951 15.0375V20.1375C27.4951 24.525 26.3826 25.625 21.9451 25.625H8.04512C3.60762 25.625 2.49512 24.525 2.49512 20.1375V9.8625C2.49512 5.475 3.60762 4.375 8.04512 4.375H18.1201" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M23.8455 5.16288L19.208 9.80038C19.033 9.97538 18.858 10.3254 18.8205 10.5754L18.5705 12.3504C18.483 12.9879 18.933 13.4379 19.5705 13.3504L21.3455 13.1004C21.5955 13.0629 21.9455 12.8879 22.1205 12.7129L26.758 8.07538C27.558 7.27538 27.933 6.35038 26.758 5.17538C25.5705 3.98788 24.6455 4.36288 23.8455 5.16288Z" 
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
                <Path 
                    d="M23.1837 5.8252C23.5837 7.2377 24.6837 8.3377 26.0837 8.7252"
                    stroke={data.color} 
                    stroke-width="1.5" 
                    stroke-miterlimit="10" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}

