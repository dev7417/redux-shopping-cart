import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Card from './Components/Card';
import CardData from './Components/CardData';


function App() {
  return (
   <>
    <BrowserRouter>
   <Header/>
      <Routes>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/CardData' element={<cardData/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
