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
import NavBar from './components/utils/NavBar';
import HomePageEditor from './components/HomePageEditor';
import MenuItemPage from './components/MenuItemPage';
import HomePage from './components/HomePage';
import NotFound from './components/errorPages/NotFound';

function App() {
  return (
    <>
      <NavBar url={keys.backendUrl} />
      <div className="d-flex flex-column" style={{ minHeight: '90vh', background: '#EFEFEF', paddingTop: '10vh' }}>
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
    </>
  );
}

export default App;
