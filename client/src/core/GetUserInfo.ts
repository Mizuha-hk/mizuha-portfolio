import axios from "axios";

export async function GetUserInfo(){
    const response = await axios.get(`/.auth/me`);
    const { clientPrincipal } = response.data;
    return clientPrincipal;
}