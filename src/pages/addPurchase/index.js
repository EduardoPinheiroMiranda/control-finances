import React, { useState } from "react";
import { View, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { listMethoodPayment, listPurchaseTypes } from "./selectableItems";

// components
import { InputText } from "../../components/InputText";
import { SelectorBox } from "../../components/SelectorBox";


export function AddPurchase(){

    const [title, setTitle] = useState(null);
    const [typePurchase, setTypePurchase] = useState(null);
    const [methodPayment, setMethodPayment] = useState(null);
    const [price, setPrice] = useState(0);
    const [DatePurchase, setDatePurchase] = useState(null);
    const [description, setDescription] = useState(null);
    
    
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    enabled
                >
                    <ScrollView
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.form}>
                    
                            <InputText
                                label="Titulo da compra"
                                value={title}
                                placeholder="EX.: compra no mercado"
                                action={setTitle}
                            />

                            <SelectorBox
                                title="Selecione qual o tipo da compra"
                                value={typePurchase}
                                action={setTypePurchase}
                                items={listPurchaseTypes}
                            />

                            <SelectorBox
                                title="Selecione qual a forma de pagamento"
                                value={methodPayment}
                                action={setMethodPayment}
                                items={listMethoodPayment}
                            />

                            <InputText
                                label="Valor da compra"
                                value={price}
                                placeholder=""
                                action={setPrice}
                                keyboardType="numeric"
                                coin={true}
                            />

                            <InputText
                                label="Adicione uma descrição - (opcional)"
                                value={description}
                                placeholder=""
                                action={setDescription}
                                multiline={true}
                            />

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}