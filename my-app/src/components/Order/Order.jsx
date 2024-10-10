import "./Order.css"
import UserOrder from "../../api/services/service-user";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const Order = () => {
    const [getOrder, setGetOrder] = useState([]);

   
    
    useEffect(() => {
       UserOrder.fetchOrder().then((order) => {
 
            setGetOrder(order);
        }).catch((reject) => console.error(reject))
        
    }, []);

    return (
        <table className="order__table">
             <tbody>
            {getOrder.map((order, index) => (
                <tr key={index} className="order__table-list">
            
                  <td>  <Link to={`/single-order/${order?.id}`}>{order.name}</Link></td>
      
                    
                </tr>
            ))}
            </tbody>
        </table>

    )
}
export default Order;