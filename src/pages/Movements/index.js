import React, { useEffect, useState, useContext } from "react";
import { View, FlatList, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { ListMovements } from "../../components/ListMovements";
import { styles } from "./styles";
import { colorPattern } from "../../themes";
import { FinancialSummaryContext } from "../../contexts/financialSummary";
import { checkCallAnswers } from "../../services/checkCallAnswers";

// icon
import AntDesign from '@expo/vector-icons/AntDesign';

// components
import { Spinner } from "../../components/Spinner";
import { ExternalCalls } from "../../services/externalCalls";
import { AuthContext } from "../../contexts/auth";
import { PopUp } from "../../components/PopUp";


export function Movements(){

    const externalCalls = new ExternalCalls();
    const { movements } = useContext(FinancialSummaryContext);
    const { signOut } = useContext(AuthContext);
    const [listMovements, setListMovements] = useState([]);
    const [name, setName] = useState(null);
    const [loadData, setLoadData] = useState(false);
    const [loadPage, setLoadPage] = useState(false);
    const [visible, setVisible] = useState(false);
    const [buttons, setButtons] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    useEffect(() => {
        setLoadPage(true);
        setListMovements(movements);
        setLoadPage(false); 
    }, [name]);


    async function searchMovements(body){

        const response = await externalCalls.POST("/user/getAllMovements", true, body);
        const messageContent = checkCallAnswers({response, closePopUp: setVisible, signOut});
        
        if(response.statusCode !== 200){
            setTitle(messageContent.title);
            setDescription(messageContent.description);
            setButtons(messageContent.buttons);
            setVisible(true);
        }
        
        return response
    }

    async function searchMoreMovements(){
        
        setLoadData(true);

            if(listMovements.length%20!=0){
                setLoadData(false);
                return;
            }

            const lastPosition = listMovements.length - 1;
            const cursor = listMovements[lastPosition].id;
            
            const body = {name, cursor};
            const response = await searchMovements(body);

            setListMovements([...listMovements, ...response.response]);

        setLoadData(false);
        
    }

    async function searchMovementByName(){

        if(!name || name === "" || name === " "){
            return;
        }

        setLoadPage(true);

            const body = { name, cursor: null };
            const response = await searchMovements(body);

            setListMovements(response.response);

        setLoadPage(false);
    }

   
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.sectionSearch}>
                <TextInput
                    style={styles.searchInput}
                    value={name}
                    onChangeText={(value) => setName(value)}
                    placeholder="Pesquisar..."
                    placeholderTextColor={colorPattern.gray_400}
                />

                <View style={styles.sectionButtons}>
                    <TouchableOpacity 
                        style={styles.buttonSearch}
                        activeOpacity={0.6}
                        onPress={searchMovementByName}
                    >
                        <AntDesign 
                            name="search1" 
                            size={20} 
                            color={colorPattern.white_800}
                        />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{flex: 1, paddingHorizontal: 20}}>

                {loadPage ?
                    <Spinner size={38}/>
                        :
                    <FlatList
                        data={listMovements}
                        renderItem={({item}) => <ListMovements data={{
                            ...item,
                            installment: `${item.total_installments}x`,
                            purchase_date: item.created_at
                        }}/>}
                        keyExtractor={(item) => item.id}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        onEndReached={searchMoreMovements}
                        ListFooterComponent={()=> loadData && <Spinner size={38} color={colorPattern.blue_900}/>}
                    />  
                }
                    
            </View> 


            <PopUp 
                openModal={visible}
                title={title}
                type={""}
                description={description}
                buttons={buttons}
            />
        </SafeAreaView>
    );
}