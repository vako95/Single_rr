import axios from "axios"
import { BASE_URL } from "./config/config"

class UserOrder{

    static async fetchOrder(){
        const response = await axios.get(`${BASE_URL}users`);
        return response.data
    }

    static async getSingleOrder(user_id){
        const response = await axios.get(`${BASE_URL}users/${user_id}`);
        return response.data;
    }
}

export default UserOrder;