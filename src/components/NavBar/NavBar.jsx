import CategoryList from "../CategoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar(){
    return(
        <div className="navbar__wrapper">
            <CategoryList/>
            <CartWidget/>
        </div>
    )
}

export default NavBar;