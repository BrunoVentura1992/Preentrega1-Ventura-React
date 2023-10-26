import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"

export const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos/as a Camisetas Vintage, nuestra tienda online de remeras de fútbol históricas"} />
    
    </>
  )
}
