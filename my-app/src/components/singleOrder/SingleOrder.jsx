import React, { useEffect, useState } from "react";
import UserOrder from "../../api/services/service-user";

const SingleOrder = ({orderId}) => {
    
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchSingleOrder = async () => {
            try {
                const singleOrder = await UserOrder.getSingleOrder(orderId);
                setOrder(singleOrder);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSingleOrder();
    }, [orderId]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка: {error.message}</p>;
    }

    return (
        <div>
      
            {order ? (
                <div>
                    <h2>Детали заказа</h2>
                    <p>ID заказа: {order.id}</p>
                    <p>Имя: {order.name}</p>
                    <p>Продукт: {order.product}</p>
                    <p>Количество: {order.quantity}</p>
                    <p>Общая цена: {order.totalPrice}</p>
                </div>
            ) : (
                <p>Заказ не найден.</p>
            )}
        </div>
    );
};

export default SingleOrder;