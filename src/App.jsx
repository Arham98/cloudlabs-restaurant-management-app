import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import keys from './hooks/keys.json';
import Footer from './components/utils/Footer';
import HomePageEditor from './components/HomePageEditor';
import MenuItemPage from './components/MenuItemPage';
import HomePage from './components/HomePage';
import NotFound from './components/errorPages/NotFound';

function App() {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: '90vh', background: '#EFEFEF' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/menu" />} />
            <Route path="menueditor" element={<HomePageEditor />} />
            <Route path="menu/:id" element={<MenuItemPage />} />
            <Route path="menu" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer url={keys.backendUrl} />
    </>
  );
}

export default App;
