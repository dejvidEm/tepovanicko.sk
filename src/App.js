import Cennik from "./comp/Cennik";
import Footer from "./comp/Footer";
import Home from "./comp/Home";
import Kontakt from "./comp/Kontakt";
import Navbar from "./comp/Navbar";
import Onas from "./comp/Onas";
import Praca from "./comp/Praca";
import Recenzie from "./comp/Recenzie";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Onas/>
      <Praca/>
      <Cennik/>
      <Recenzie/>
      <Kontakt/>
      <Footer/>
    </div>
  );
}

export default App;
