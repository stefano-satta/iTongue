import './App.css';
import Header from './components/common/header/Header';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Footer from './components/common/footer/Footer';
import Translate from './pages/Translate';

function App() {
  return (
    // style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}
    <div className="App" style={{minHeight: '100vh'}}>  
      <BrowserRouter>
        <Header/>
        {/* style={{flex: '1', padding: '0 0 72px'}} */}
        <main style={{flex: '1', padding: '0 30px 72px'}}>
          <Routes>
            <Route path='/' element={<Navigate to='/dictionary' replace/>}/>
            <Route path='/dictionary' element={<Dictionary/>}/>
            <Route path='/translate' element={<Translate/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
