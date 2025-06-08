import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { styles } from "./styles";
import { colorPattern } from "../../themes";


export function CalendarModal({visible, action, hiderCalendar}){

    const [makedDates, setMarkedDates] = useState({});
    

    function handlerDate(date){
        
        let selectDate = {};
        selectDate[date.dateString] = {
            selected: true
        };

        setMarkedDates(selectDate);
        action(new Date(date.year, date.month-1, date.day));
        hiderCalendar();
    }

    return(
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
        >
            <View style={styles.modal}>

                <TouchableOpacity 
                    style={styles.close}
                    onPress={action}
                />

                <View style={styles.sectionCalendar}>
                    <Calendar
                        onDayPress={handlerDate}
                        markedDates={makedDates}
                        theme={{
                            backgroundColor: colorPattern.blue_300,
                        }}
                    />
                </View>
                
            </View>
            
        </Modal>
    );
}