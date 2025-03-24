import React, { useEffect, useState } from "react";
import { StatusBar, View, FlatList, TextInput, TouchableOpacity, SafeAreaView, Modal } from "react-native";
import { ListMovements } from "../../components/listMovements";
import { styles } from "./styles";
import { colorPattern } from "../../themes";

// pages
import { moviments } from "../../../dataFromTest";

// icon
import AntDesign from '@expo/vector-icons/AntDesign';

// components
import { Filter } from "./filter";


export function Movements(){

    const [listMovements, setListMovements] = useState([]);
    const [searchMovement, setSearchMovement] = useState("");
    const [openFilter, setOpenFilter] = useState(false);


    useEffect( () => {
        setListMovements(moviments);
    }, []);

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.sectionSearch}>
                <TextInput
                    style={styles.searchInput}
                    value={searchMovement}
                    onChangeText={(value) => setSearchMovement(value)}
                    placeholder="Pesquisar..."
                    placeholderTextColor={colorPattern.gray_400}
                />

                <View style={styles.sectionButtons}>
                    <TouchableOpacity 
                        style={styles.buttonSearch}
                        activeOpacity={0.6}
                    >
                        <AntDesign 
                            name="search1" 
                            size={20} 
                            color={colorPattern.white_800}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonSearch}
                        activeOpacity={0.6}
                        onPress={() => setOpenFilter(!openFilter)}
                    >
                        <AntDesign 
                            name="filter" 
                            size={25} 
                            color={colorPattern.white_800}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flex: 1}}>
                <FlatList
                    data={listMovements}
                    renderItem={({item}) => <ListMovements data={item}/>}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                />
            </View> 

            <Modal 
                transparent={true}
                visible={openFilter}
                animationType="slide"
            >
                <Filter openFilter={() => setOpenFilter(!openFilter)}/>
            </Modal>
        </SafeAreaView>
    );
}