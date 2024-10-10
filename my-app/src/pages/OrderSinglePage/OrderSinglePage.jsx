import "./OrderSinglePage.css";
import { useParams } from "react-router-dom";
import SingleOrder from "../../components/singleOrder/SingleOrder";

const OrderSinglePage = () => {
    // Получаем параметр 'id' из URL
    const { userId } = useParams();

    return (
        <div className="order-single">
            {/* Передаем id как orderId в SingleOrder */}
            <SingleOrder orderId={userId} />
        </div>
    );
};

export default OrderSinglePage;
