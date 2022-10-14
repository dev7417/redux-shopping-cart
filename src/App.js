import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Cards from './Components/Cards';
import CardData from './Components/CardData';


function App() {
  return (
   <>
    <BrowserRouter>
   <Header/>
      <Routes>
        <Route path='/Card' element={<Cards/>}/>
        <Route path='/CardData' element={<cardData/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
