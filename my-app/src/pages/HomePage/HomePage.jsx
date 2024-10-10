import NavBar from "../../components/NavBar/NavBar";
import Order from "../../components/Order/Order";
import "./HomePage.css"

const HomePage = () => {

    return (
        <div className="home-page">
            <NavBar/>
            <Order />
        </div>
    )
}
export default HomePage;