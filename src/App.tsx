import './App.css';
import Header from './components/common/header/Header';
import {BrowserRouter, Navigate, Route, Routes, Outlet} from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Footer from './components/common/footer/Footer';
import Translate from './pages/Translate';

function App() {
  
  return (
    <div className=" h-screen">
      <BrowserRouter basename='/iTongue'>
        <Header/>
        <div className="container mx-auto p-6 flex-grow">
          <Routes>
            <Route path="/" element={<Outlet/>}>
              <Route path='/' element={<Navigate replace to='/dictionary'/>}/>
              <Route path='/dictionary' element={<Dictionary/>}/>
              <Route path='/translate' element={<Translate/>}/>
              <Route path="*" element={<h1>404 - Not Found</h1>}/>
            </Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
