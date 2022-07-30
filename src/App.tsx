import './App.css';
import Header from './components/common/header/Header';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Footer from './components/common/footer/Footer';
import Translate from './pages/Translate';

function App() {
  
  return (
    <div className="App bg-wall">
      <BrowserRouter>
        <Header/>
        <div className="container mx-auto py-5">
          <Routes>
            <Route path='/' element={<Navigate to='/dictionary' replace/>}/>
            <Route path='/dictionary' element={<Dictionary/>}/>
            <Route path='/translate' element={<Translate/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
