import "./App.css";
import Brand from "./components/Brand";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return(
    <div>
      <div className="header__wrapper">
      <Brand/>
      <NavBar/>
      </div>
      <ItemListContainer greeting="Bienvenidos!!"/>
    </div>
  )
}

export default App;