import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, FlatList, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { ListMovements } from "../../components/listMovements";
import { styles } from "./styles";
import { colors } from "../../themes";


// icon
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { moviments } from "../../../dataFromTest";


export function Movements(){

    const [listMovements, setListMovements] = useState([]);
    const [searchMovement, setSearchMovement] = useState("");


    useEffect( () => {
        setListMovements(moviments);
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View style={{flex: 1}}>
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchMovement}
                        onChangeText={(value) => setSearchMovement(value)}
                        placeholder="Pesquisar..."
                        placeholderTextColor={colors.color_9}
                    />

                    <TouchableOpacity 
                        style={styles.buttonSearch}
                        activeOpacity={0.6}
                    >
                        <EvilIcons name="search" size={30} color={colors.color_8} />
                    </TouchableOpacity>
                    
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
            </View>
        </SafeAreaView>
    );
}