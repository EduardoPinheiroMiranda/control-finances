import { API_URL } from "@env";
import axios from "axios";


export async function registerUser(data){

    try{
        // await fetch(
        //     `${API_URL}/user/userRegister`,
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data),
        //     }
        // )
        // .then((response) => response.json())
        // .then((data) => console.log(data.msg));

        const response = await axios.post(
            `http://10.0.0.107:3300/user/userRegister`,
            data,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(response.data)
    
    }catch(err){
        console.log(err);
    }
}