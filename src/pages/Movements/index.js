import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
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
            <View>
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

                <View>
                    <FlatList
                        data={listMovements}
                        renderItem={({item}) => <ListMovements data={item}/>}
                        showsVerticalScrollIndicator={false}
                        key={({item}) => item.id}
                    />
                </View> 
            </View>
        </SafeAreaView>
    );
}