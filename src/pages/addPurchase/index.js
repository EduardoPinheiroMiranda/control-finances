import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { defaultPageStyle } from "../../themes/stylesDefault";
import { listPurchaseTypes, listMethodPayment, listItems } from "./selectableItems";
import { format } from "date-fns";
import { FinancialSummaryContext } from "../../contexts/financialSummary";
import { validations } from "./validations";

// components
import { InputText } from "../../components/InputText";
import { SelectorBox } from "../../components/SelectorBox";
import { CustomText } from "../../components/CustomText";
import { Button } from "../../components/Button";
import { CalendarModal } from "../../components/CalendarModal";
import { PopUp } from "../../components/PopUp";
import { ExternalCalls } from "../../services/externalCalls";
import { AuthContext } from "../../contexts/auth";


export function AddPurchase(){

    const { cards, categories } = useContext(FinancialSummaryContext);
    const { signOut } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState(null);
    const [typePurchase, setTypePurchase] = useState("fixedExpense");
    const [methodPayment, setMethodPayment] = useState("card");
    const [installments, setInstallments] = useState(1);
    const [selectCard, setSelectCard] = useState(null);
    const [selectCategory, setSelectCategory] = useState(null);
    const [price, setPrice] = useState(0);
    const [dueDay, setDueDay] = useState(null);
    const [datePurchase, setDatePurchase] = useState(null);
    const [description, setDescription] = useState(null);

    // states from popUp
    const [titleNotification, setTitleNotification] = useState("");
    const [descriptionNotification, setDescriptionNotification] = useState("");
    const [openNotification, setOpenNotification] = useState(false);
    const [buttons, setButtons] = useState([]);

    const placeholder = !datePurchase ? "Ex.: 01/01/2025" : format(new Date(datePurchase), "dd/MM/yyyy");
    const externalCall = new ExternalCalls();

    useEffect(() => {
        setSelectCard(cards[0].id);
        setSelectCategory(categories[0].id);
    }, [])


    async function sendForm(){
    
        const body = {
            name: name,
            typeInvoice: typePurchase,
            paymentMethod: methodPayment,
            value: price,
            totalInstallments: installments,
            description: description,
            dueDay: dueDay || 0,
            categoryId: selectCategory,
            cardId: methodPayment === "card" ? selectCard : null,
            purchaseDate: datePurchase
        }

        const response = await externalCall.POST("/shopping/registerShopping", true, body);

        if(response.statusCode === 401){
            setTitleNotification("Sessão expirada");
            setDescriptionNotification("Verifique todos os dados antes de enviá-los, e garanta que está tudo certo.");
                setButtons([{
                title: "Ok",
                action: () => {
                    setOpenNotification(false);
                    signOut()
                }
            }])
            setOpenNotification(true);
            return;
        }

        if(response.statusCode !== 201){
            setTitleNotification("Ops...");
            setDescriptionNotification(response.msg);
            setButtons([{
                title: "Ok",
                action: () => setOpenNotification(false)
            }])
            setOpenNotification(result.openNotification);
            return;
        }

        setTitleNotification("Sucesso!!");
        setDescriptionNotification("Compra adicionada.");
        setButtons([{
            title: "Ok",
            action: () => setOpenNotification(false)
        }])
        setOpenNotification(result.openNotification);
    }

    async function handlerForm(){
        
        const result = validations(
            name, typePurchase, methodPayment, price, installments,
            selectCard, dueDay, selectCategory, setOpenNotification
        );
        
        if(result){
            setTitleNotification(result.title);
            setDescriptionNotification(result.description);
            setButtons(result.buttons);
            setOpenNotification(result.openNotification);
            return;
        }


        setTitleNotification("Atenção");
        setDescriptionNotification("Verifique todos os dados antes de enviá-los, e garanta que está tudo certo.");
            setButtons([
                {
                    title: "Revisar",
                    action: () => setOpenNotification(false)
                },
                {
                    title: "Continuar",
                    action: sendForm
                }
            ])
        setOpenNotification(true);
        
        return;
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
                            value={name}
                            placeholder="EX.: compra no mercado"
                            action={setName}
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
                                value={dueDay}
                                placeholder="Ex.: 10"
                                action={setDueDay}
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
                    clear={() => {
                        setDatePurchase(null);
                        setVisible(false);
                    }}
                />

                <PopUp
                    title={titleNotification}
                    type=""
                    description={descriptionNotification}
                    openModal={openNotification}
                    buttons={buttons}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}