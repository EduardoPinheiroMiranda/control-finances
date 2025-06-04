import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { CustomText } from "../CustomText";
import { styles } from "./styles";
import { colorPattern } from "../../themes";

// icons
import Alert from "../../assets/svg/alert.svg";


function Header({type, title}){

    return(
        <View 
            style={[
                styles.header,
                {backgroundColor: type === "alert" ? colorPattern.red_900 : colorPattern.blue_300}
            ]}
        >
            {type === "alert" && <Alert/>}

            <CustomText style={styles.title}>
                {title}
            </CustomText>
        </View>
    );
}

function Button({data}){
    return(
        <View style={styles.sectionButton}>
            {
                data.map((button, index) => {

                    let buttonStyles = {};

                    if(data.length > 1){
                        buttonStyles = {
                            ...styles.defaultButton,
                            ...{width: "50%"},
                            ...(index === 0 ? styles.buttonLeft : styles.buttonRight)
                        }
                    }else{
                        buttonStyles = {
                            ...styles.defaultButton,
                            ...{
                                width: "100%",
                                borderBottomStartRadius: 15,
                                borderBottomEndRadius: 15,
                            }
                        };
                    }


                    return(
                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={buttonStyles}
                            onPress={button.action}
                            key={index}
                        >
                            <CustomText style={styles.buttonText}>
                                {button.title}
                            </CustomText>
                        </TouchableOpacity>
                    );
                })
            }
            
        </View>
    );
}

export function PopUp({openModal, title, type, description, buttons}){


    return(
        <Modal visible={openModal} transparent={true} animationType="slide">

            <View style={styles.container}>

                <View style={styles.popUp}>

                    <Header type={type} title={title}/>

                    <View style={styles.description}>
                        <CustomText style={styles.text}>{description}</CustomText>
                    </View>

                    <Button data={buttons}/>
                    
                </View>
                
            </View>

        </Modal>
    );
}