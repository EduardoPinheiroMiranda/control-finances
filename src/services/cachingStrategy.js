import AsyncStorage from "@react-native-async-storage/async-storage";


export class CachingStrategy{

    constructor(){}

    async addItem(key, value){
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }

    async getItem(key){

        const resul = await AsyncStorage.getItem(key);
        
        if(!resul) return null;

        return JSON.parse(resul);
    }

    async clearAllCaching(){
        await AsyncStorage.clear();
    }

    async resetData(){
        await AsyncStorage.multiRemove([
            "userInvoices",
        ])
    }

    async removeItem(key){
        await AsyncStorage.removeItem(key);
    }
}