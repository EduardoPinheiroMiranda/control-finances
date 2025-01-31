import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { ListMovements } from "../../components/listMovements";
import { styles } from "./styles";
import { colors } from "../../themes";


// icon
import EvilIcons from '@expo/vector-icons/EvilIcons';



const moviments = [
    {
        id: "1",
        method: "card",
        credit: true,
        title: "Roupas",
        date: "12/04/2001",
        value: "150,00",
        installments: "3x"
    },
    {
        id: "2",
        method: "invoice",
        credit: false,
        title: "Conta de água",
        date: "12/04/2001",
        value: "300,00",
        installments: ""
    },
    {
        id: "3",
        method: "invoice",
        credit: true,
        title: "Internet",
        date: "12/04/2001",
        value: "250,00",
        installments: ""
    },
    {
        id: "4",
        method: "card",
        credit: true,
        title: "Farmacia",
        date: "12/04/2001",
        value: "100,00",
        installments: "2x"
    },
    {
        id: "5",
        method: "invoice",
        credit: false,
        title: "IPTU",
        date: "12/04/2001",
        value: "800,00",
        installments: ""
    },
    {
        id: "6",
        method: "money",
        credit: false,
        title: "Uber",
        date: "12/04/2001",
        value: "50,00",
        installments: ""
    },
    {
        id: "7",
        method: "money",
        credit: false,
        title: "Barbeiro",
        date: "12/04/2001",
        value: "500,00",
        installments: ""
    },
    {
        id: "8",
        method: "invoice",
        credit: false,
        title: "Conta de luz",
        date: "12/04/2001",
        value: "50,00",
        installments: ""
    },
    {
        id: "9",
        method: "money",
        credit: false,
        title: "Uber",
        date: "12/04/2001",
        value: "50,00",
        installments: ""
    },
    {
        id: "10",
        method: "money",
        credit: false,
        title: "Barbeiro",
        date: "12/04/2001",
        value: "500,00",
        installments: ""
    },
    {
        id: "11",
        method: "invoice",
        credit: false,
        title: "Conta de luz",
        date: "12/04/2001",
        value: "50,00",
        installments: ""
    },
    {
        id: "12",
        method: "invoice",
        credit: false,
        title: "Conta de água",
        date: "12/04/2001",
        value: "300,00",
        installments: ""
    },
    {
        id: "13",
        method: "invoice",
        credit: true,
        title: "Internet",
        date: "12/04/2001",
        value: "250,00",
        installments: ""
    },
    {
        id: "14",
        method: "card",
        credit: true,
        title: "Farmacia",
        date: "12/04/2001",
        value: "100,00",
        installments: "2x"
    },
    {
        id: "15",
        method: "invoice",
        credit: false,
        title: "IPTU",
        date: "12/04/2001",
        value: "800,00",
        installments: ""
    },     
]


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
                        renderItem={({item}) => {
                            console.log(item)
                            return(<ListMovements data={item}/>);
                        }}
                        showsVerticalScrollIndicator={false}
                        key={({item}) => item.id}
                    />
                </View> 
            </View>
        </SafeAreaView>
    );
}