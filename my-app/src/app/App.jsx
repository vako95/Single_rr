
import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/About/AboutPage";
import SingleOrder from "../components/singleOrder/SingleOrder";
import OrderSinglePage from "../pages/OrderSinglePage/OrderSinglePage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/single-order/:userId" element={<OrderSinglePage/>} />
                <Route />
            </Route>
        </Routes>
    )
}
export default App;