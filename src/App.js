import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Card from './Components/Card';
import CardData from './Components/CardData';


function App() {
  return (
   <>
   <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
