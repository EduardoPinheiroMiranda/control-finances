import React, { useContext, useState } from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { listPurchaseTypes, listMethodPayment, listItems } from "./selectableItems";
import { format } from "date-fns";
import { FinancialSummaryContext } from "../../contexts/financialSummary";

// components
import { InputText } from "../../components/InputText";
import { SelectorBox } from "../../components/SelectorBox";
import { CustomText } from "../../components/CustomText";
import { Button } from "../../components/Button";
import { CalendarModal } from "../../components/CalendarModal";


export function AddPurchase(){

    const { cards, categories } = useContext(FinancialSummaryContext);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState(null);
    const [typePurchase, setTypePurchase] = useState(null);
    const [methodPayment, setMethodPayment] = useState(null);
    const [installments, setInstallments] = useState("1");
    const [selectCard, setSelectCard] = useState(null);
    const [selectCategory, setSelectCategory] = useState(null);
    const [price, setPrice] = useState(0);
    const [datePurchase, setDatePurchase] = useState(null);
    const [description, setDescription] = useState(null);

    const placeholder = !datePurchase ? "Ex.: 01/01/2025" : format(new Date(datePurchase), "dd/MM/yyyy");
    

    async function handlerForm(){
        console.log(datePurchase);
    }
    
    
    return(
        <SafeAreaView style={[defaultPageStyle.page, styles.container]}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.scrollView}>
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
                            items={listMethodPayment}
                        />
            
                        <View style={styles.valueAndInstallments}>
                            <InputText
                                label="Valor da compra"
                                value={price}
                                placeholder=""
                                action={setPrice}
                                keyboardType="numeric"
                                coin={true}
                            />
            
                            <InputText
                                label="Quantidade de parcelas"
                                value={installments}
                                placeholder=""
                                action={setInstallments}
                                keyboardType="numeric"
                            />                                
                        </View>
                                        
                        {methodPayment !== "card" ? 
                            <InputText
                                label="Dia do vencimento"
                                value={price}
                                placeholder="Ex.: 10"
                                action={setPrice}
                                keyboardType="numeric"
                            />
                            :
                            <SelectorBox
                                title="Selecionar cartão"
                                value={selectCard}
                                items={listItems(cards)}
                                action={setSelectCard}
                            />
                        }

                        <SelectorBox
                            title="Selecionar uma categoria"
                            value={selectCategory}
                            items={listItems(categories)}
                            action={setSelectCategory}
                        />
                        
                        <View>
                            <CustomText style={styles.label}>
                                Quando foi feita a compra - (opcional)
                            </CustomText>
            
                            <TouchableOpacity 
                                style={styles.sectionDatePurchase}
                                activeOpacity={1}
                                onPress={() => setVisible(true)}
                            >
                                <CustomText style={!datePurchase? styles.textExample : styles.text}>
                                    {placeholder}
                                </CustomText>
                            </TouchableOpacity>
                        </View>
            
                        <InputText
                            label="Adicione uma descrição - (opcional)"
                            value={description}
                            placeholder=""
                            action={setDescription}
                            multiline={true}
                        />
                    </View>

                    <View style={styles.sectionButton}>
                        <Button title="Salvar compra" action={handlerForm}/>
                    </View>
                </ScrollView>

                <CalendarModal 
                    visible={visible} 
                    action={setDatePurchase}
                    hiderCalendar={() => setVisible(false)}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}