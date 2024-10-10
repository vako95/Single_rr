import "./Menu.css"
import MenuItem from "./MenuItem/MenuItem";


const Menu = ({item}) => {

    return (
        <div className="menu">
           <ul className="menu__list">
           {item.map((item,index) => (
            <MenuItem key={index} name={item.name} link={item.link} collpase ={item.collpase}/>
           ))}
           </ul>
        </div>
    )
}
export default Menu;